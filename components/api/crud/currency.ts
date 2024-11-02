import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export type CurrencyItem = {
  id: ID;
  country: string;
  curr: string;
};

export interface Currency {
  id: ID;
  country: string;
  curr: string;
  data: CurrencyItem[];
}

export const useCurrencies = () => {
  const addCurrency = useApiMutation<AuthResponse, FormData>({
    url: "/Currency/newcurrency",
    method: "POST",
  });

  const updateCurrency = useApiMutation<AuthResponse, FormData>({
    url: "/Currency/updatecurrency",
    method: "POST",
  });

  const getCurrencyList = () =>
    useApiQuery<Currency>(["currencies"], {
      url: `/Currency/currencylist`,
      method: "GET",
    });

  return {
    addCurrency,
    updateCurrency,
    getCurrencyList
  };
};
