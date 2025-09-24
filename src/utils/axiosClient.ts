import axios from "axios";
import { toast } from "sonner";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const initializeResInterceptor = (handleClearStoreUser: () => void) => {
  return axiosClient.interceptors.response.use(
    (res) => res,
    (error) => {
      const isUnauthorized = error.response?.status === 401;
      const isOnLoginPage = window.location.pathname === "/login";

      if (isUnauthorized && !isOnLoginPage) {
        toast.error("Your session expired !");
        handleClearStoreUser();
      }
      return Promise.reject(error);
    }
  );
};
