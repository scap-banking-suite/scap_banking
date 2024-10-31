import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export type LedgerListItem = {
  code: string;
  subName: string;
  name: string;
  ledgerClassID: ID;
  parentID: ID;
  id: ID;
};
export interface LedgerList {
  parentID: ID;
  id: ID;
  code: string;
  subName: string;
  name: string;
  ledgerClassID: ID;
  data: LedgerListItem[];
}

export type ClassListItem = {
  id: ID;
  name: string;
};

export interface ClassList {
  id: ID;
  name: string;
  data: ClassListItem[];
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

  const getLedgerClass = () =>
    useApiQuery<ClassList>(["ledgerlist"], {
      url: `/LedgerClass/ledgerclasslist`,
      method: "GET",
    });

  const getLists = (parentId?: ID, legerClass?: ID) =>
    useApiQuery<LedgerList>(["ledgerlist", parentId, legerClass], {
      url: `/LedgerSubClass/ledger-subclass-list-filter`,
      method: "GET",
      params: {
        ...(parentId && { parentId }),
        ...(legerClass && { legerClass }),
      },
    });

  return {
    addList,
    getLists,
    updateList,
    getLedgerClass,
  };
};
