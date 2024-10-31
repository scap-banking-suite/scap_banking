import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, Country, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "./getAllContries";

export type RegionDataItem = {
  name: string;
  regionalManagerEmail: string;
  regionalManagerPhone: string;
  regionalManagerName: string;
  country: string;
  id: ID;
};
export interface Region {
  id: ID;
  name: string;
  regionalManagerEmail: string;
  regionalManagerPhone: string;
  regionalManagerName: string;
  data: RegionDataItem[];
}

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
