import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./app.store";
import { LoginRequest } from "../models/login-request";
import { Session } from "../models/session";
import { getCurrentSession } from "../shared/current-session";
import { baseUrl } from "../configs/config";

interface AuthState {
  session: Session;
  isLoading: boolean;
}

const initialState: AuthState = {
  session: getCurrentSession(),
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      localStorage.setItem("session", JSON.stringify(action.payload));
      state.session = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("session");
      state.session = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export function logIn(request: LoginRequest, domain?: string, tenant?: string) {

   console.log("request",request)
   console.log("tenant",tenant)
  return async function logInThunk(dispatch: any, getState: any) {
    try {
      dispatch(setLoading(true)); // Start loading

      const config = {
        headers: {
          "X-Domain": `${request?.domain??"User"}`,
          "X-Tenant": `${request?.tenant}`,
        },
      };
      const response = await axios.post(`${baseUrl}auth/login`, request, config);

      console.log("response gtt", response?.data?.data);
      dispatch(setSession({ accessToken: response.data, userInfo: response?.data?.data?.user }));
    } catch (error: any) {
      // Handle error
    } finally {
      dispatch(setLoading(false)); // Stop loading
    }
  };
}



export const { setSession, logOut, setLoading } = authSlice.actions;

export const selectSession = (state: RootState) => state.auth.session;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const authReducer = authSlice.reducer;
