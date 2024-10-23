import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, Region } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export const useRegions = () => {
  const addRegion = useApiMutation<AuthResponse, FormData>({
    url: "/Region/newregion ",
    method: "POST",
  });

  const getRegionLists = () =>
    useApiQuery<Region>(["regions"], {
      url: `/Region/regionlist`,
      method: "GET",
    });

  return {
    addRegion,
    getRegionLists
  };
};
