import { baseUrl } from "../configs/config";

export const eCommerceEndpoints = {
  getOrderByUserId: `${baseUrl}orders`,
  createUser: `${baseUrl}auth/signup`,
  createRestaurant: `${baseUrl}restaurants`,
  getRestaurant: `${baseUrl}restaurants`,
  
};
