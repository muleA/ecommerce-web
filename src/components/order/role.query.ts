import { apiSlice } from "../../store/app.api";
import { roleEndPoints } from "./order-endpoint";

const roleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getRoleByRoleId: builder.query<any, string>({
      query: (roleId) => ({
        url: `${roleEndPoints.getOrderByUserId}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),  
    
    createRole: builder.mutation<any, any>({
      query: (newRole) => ({
        url: roleEndPoints.getOrderByUserId,
        method: "POST",
        data: newRole,
      }),
      invalidatesTags: ["Order"],
    }),
    createUser: builder.mutation<any, any>({
      query: (newRole) => ({
        url: roleEndPoints.createUser,
        method: "POST",
        data: newRole,
      }),
      invalidatesTags: ["Order"],
    }),
    
  }),
});

export const {
  useGetRoleByRoleIdQuery,
  useCreateRoleMutation,
  useCreateUserMutation
} = roleApi;
