import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, Sector } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export const useSectors = () => {
  const addSector = useApiMutation<AuthResponse, FormData>({
    url: "/Sectors/newsector",
    method: "POST",
  });

  const updateSector = useApiMutation<AuthResponse, FormData>({
    url: "/Sectors/sectordetails",
    method: "POST",
  });

  const getSectorLists = () =>
    useApiQuery<Sector>(["Sectors"], {
      url: `/Sectors/sectorlist`,
      method: "GET",
    });

  return {
    addSector,
    updateSector,
    getSectorLists
  };
};
