import { apiSlice } from "../../store/app.api";
import { roleEndPoints } from "./menu-endpoint";

const roleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getMenuById: builder.query<any, string>({
      query: (menu) => ({
        url: `${roleEndPoints.getMenu}/${menu}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }), 
    getMenus: builder.query<any, string>({
      query: (menu) => ({
        url: `${roleEndPoints.getMenu}/${menu}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),   
    
    createMenu: builder.mutation<any, any>({
      query: (newRole) => ({
        url: roleEndPoints.getMenu,
        method: "POST",
        data: newRole,
      }),
      invalidatesTags: ["Order"],
    }),
    
  }),
});

export const {
  useGetMenuByIdQuery,
  useGetMenusQuery,
  useCreateMenuMutation,
} = roleApi;
