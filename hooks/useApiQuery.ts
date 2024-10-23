import { useQuery, QueryKey } from "@tanstack/react-query";
import { api } from "./apiFunction";
import { ApiError, ApiOptions } from "@/components/api/type";
import { BASE_URL } from "@/constants";

export const useApiQuery = <T>(key: QueryKey, options: Omit<ApiOptions, "url"> & { url: string }) => {
  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: () =>
      api<T>({
        ...options,
        url: `${BASE_URL || ""}${options.url}`,
      }),
  });
};
