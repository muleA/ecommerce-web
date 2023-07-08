import { baseUrl } from "../../configs/config";

export const roleEndPoints = {
  getOrderByUserId: `${baseUrl}orders`,
  createUser: `${baseUrl}auth/signup`,
  
};
