import { apiSlice } from "../store/app.api";
import { eCommerceEndpoints } from "./ecommerce-endpoints";

const ecommerceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}`,
          method: "GET",
        }),
        providesTags: ["Order"],
      }),  
    getOrdersById: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getRestaurant}/${option}/orders`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),  
    getOrders: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getOrderByUserId}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),  
    getOrder: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getOrderByUserId}/${option}`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),  
    getMenus: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}/${option}/menus`,
          method: "GET",
        }),
        providesTags: ["Order"],
      }),  
      getReviews: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}/${option}/reviews`,
          method: "GET",
        }),
        providesTags: ["Order"],
      }),  
      getSchedules: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getRestaurant}/${option}/schedules`,
        method: "GET",
      }),
      providesTags: ["Order"],
    }),  
    getNotifications: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}/${option}/notifications`,
          method: "GET",
        }),
        providesTags: ["Order"],
      }),  
    createRestaurant: builder.mutation<any, any>({
      query: (restaurantsData) => ({
        url: eCommerceEndpoints.createRestaurant,
        method: "POST",
        data: restaurantsData,
      }),
      invalidatesTags: ["Order"],
    }),
    updateRestaurant: builder.mutation<any, any>({
      query: (option) => ({
        url: `${eCommerceEndpoints.createRestaurant}/${option}`,
        method: "POST",
        data: option,
      }),
      invalidatesTags: ["Order"],
    }),
    
  }),
});

export const {
    useCreateRestaurantMutation,
    useUpdateRestaurantMutation,useGetMenusQuery,
    useGetNotificationsQuery,useGetOrdersQuery,
    useGetReviewsQuery,useGetSchedulesQuery,
useGetRestaurantsQuery,
useLazyGetRestaurantsQuery,
useLazyGetOrdersQuery,
useGetOrdersByIdQuery,
useGetOrderQuery

} = ecommerceApi;
