import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export type StateLGAItem = {
  id: ID;
  parentId: ID;
  name: string;
  code: string;
  stateOrLgaOrCountry: string;
};

export interface StateLGA {
  parentId: ID;
  id: ID;
  code: string;
  name: string;
  stateOrLgaOrCountry: string;
  data: StateLGAItem[];
}

export const useStateLGA = () => {
  const addStateLGA = useApiMutation<AuthResponse, FormData>({
    url: "/StateLGA/newstatelga",
    method: "POST",
  });

  const updateStateLGA = useApiMutation<AuthResponse, FormData>({
    url: "/StateLGA/updatestatelga",
    method: "POST",
  });

  const getStateLGA = () =>
    useApiQuery<StateLGA>(["statelga"], {
      url: `/StateLGA/statelgalist`,
      method: "GET",
    });

  return {
    addStateLGA,
    updateStateLGA,
    getStateLGA
  };
};
