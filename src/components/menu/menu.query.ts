import { apiSlice } from "../../store/app.api";
import { roleEndPoints } from "./menu-endpoint";

const roleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getRoleByRoleId: builder.query<any, string>({
      query: (roleId) => ({
        url: `${roleEndPoints.getOrderByUserId}/${roleId}`,
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
    
  }),
});

export const {
  useGetRoleByRoleIdQuery,
  useCreateRoleMutation,
} = roleApi;
