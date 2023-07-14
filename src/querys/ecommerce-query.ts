import { apiSlice } from "../store/app.api";
import { eCommerceEndpoints } from "./ecommerce-endpoints";


const ecommerceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}`,
          method: "GET",
          headers: {
            'X-DOMAIN': "User", // Use the dynamic domain value here
          },
        }),
        providesTags: ["Order"],
      }),  
      getRestaurantById: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}/${option}`,
          method: "GET",
          headers: {
            'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
            'X-Tenant': option
          },
        }),
        providesTags: ["Order"],
      }),  
    getOrdersById: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getRestaurant}/${option}/orders`,
        method: "GET",
        headers: {
          'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
          'X-Tenant': option
        },
      }),
      providesTags: ["Order"],
    }),  
    getOrders: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getRestaurant}/${option}/orders`,
        method: "GET",
        headers: {
          'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
          'X-Tenant': option
        },
      }),
      providesTags: ["Order"],
    }),  
    getOrder: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getOrderByUserId}/${option}`,
        method: "GET",
        headers: {
          'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
          'X-Tenant': option
        },
      }),
      providesTags: ["Order"],
    }),  
    getMenus: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getRestaurant}/${option}/menus`,
          method: "GET",
          headers: {
            'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
            'X-Tenant': option
          },
        }),
        providesTags: ["Order"],
      }),  
    getReviews: builder.query<any, string>({
        query: (option) => ({
          url: `${eCommerceEndpoints.getReviews}`,
          method: "GET",
          headers: {
            'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
            'X-Tenant': option
          },
        }),
        providesTags: ["Order"],
      }),  
    getSchedules: builder.query<any, string>({
      query: (option) => ({
        url: `${eCommerceEndpoints.getRestaurant}/${option}/schedules`,
        method: "GET",
        headers: {
          'X-DOMAIN': "Restaurant", // Use the dynamic domain value here
          'X-Tenant': option
        },
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
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
  useUpdateRestaurantMutation,
  useGetMenusQuery,
  useGetNotificationsQuery,
  useGetOrdersQuery,
  useGetReviewsQuery,
  useGetSchedulesQuery,
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useLazyGetOrdersQuery,
  useGetOrdersByIdQuery,
  useGetOrderQuery,
  useGetRestaurantByIdQuery
} = ecommerceApi;
