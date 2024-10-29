import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, GeoDataItem } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";


export const useGeoArea = () => {
  const addGeoArea = useApiMutation<AuthResponse, FormData>({
    url: "/StateLGA/newstatelga ",
    method: "POST",
  });

  const updateGeoArea = useApiMutation<AuthResponse, FormData>({
    url: "/StateLGA/updatestatelga ",
    method: "POST",
  });

  const getGeoLists = () =>
    useApiQuery<GeoDataItem>(["geoarea"], {
      url: `/StateLGA/statelgalist`,
      method: "GET",
    });

   

  return {
    addGeoArea,
    getGeoLists,
    updateGeoArea
  };
};
