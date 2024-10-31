import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export type LedgerListItem = {
  code: string;
  subName: string;
  ledgerClassID: ID;
  parentId: ID;
};
export interface GeoArea {
  parentId: ID;
  code: string;
  subName: string;
  ledgerClassID:ID
  data: LedgerListItem[];
}


export const useLedgerList = () => {
  const addList = useApiMutation<AuthResponse, FormData>({
    url: "/LedgerSubClass/newledger-subclass ",
    method: "POST",
  });

  const updateList = useApiMutation<AuthResponse, FormData>({
    url: "/LedgerSubClass/ledger-subclass-details ",
    method: "POST",
  });

  const getLists = () =>
    useApiQuery<LedgerListItem>(["ledgerlist"], {
      url: `/LedgerSubClass/ledger-subclass-list`,
      method: "GET",
    });

   

  return {
    addList,
    getLists,
    updateList
  };
};
