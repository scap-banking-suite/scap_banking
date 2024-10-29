import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, Country, Region } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "./getAllContries";

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

    const getCountries = () => {
      return useQuery<Country>({
        queryFn: () => getAllCountries(),
        queryKey: ["allCountries"],
        staleTime: 0,
      });
    };

  return {
    addRegion,
    getRegionLists,
    getCountries
  };
};
