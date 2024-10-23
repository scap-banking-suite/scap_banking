import { ApiOptions } from "@/components/api/type";
import axiosInstance from "./axiosInstance";
import { globalErrorHandler } from "./errorHandling";
import { toast } from "sonner";
import Cookies from "js-cookie";

export const api = async <T>({
  url,
  method,
  ...config
}: ApiOptions): Promise<T> => {

  try {
    const response = await axiosInstance({ url, method, ...config });

    if (response?.data?.succeeded === false) {
      const errorMessage = response?.data?.message;

      if (errorMessage?.includes("token is expired")) {
        toast.error("Session expired. Redirecting to login...");
        localStorage.removeItem("accessToken");
        Cookies.remove("accessToken");
        window.location.href = "/auth/login";

        throw new Error("Token expired. Redirecting to login...");
      }

      // Handle any other cases where `succeeded` is false
      throw new Error(errorMessage || "Request failed");
    }

    // Return successful response data
    return response.data;
  } catch (error) {
    console.log(error, "error_queryy");

    throw globalErrorHandler(error);
  }
};
