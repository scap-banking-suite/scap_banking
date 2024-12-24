import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export type LedgerListItem = {
  code: string;
  subName: string;
  acctName: string;
  name: string;
  currencyCode: string;
  currency: any;
  status: boolean;
  ledgerClassID: ID;
  ledgerSubClassID: ID;
  parentID: ID;
  regionID: ID;
  regionName: string;
  accountClassificationID: ID;
  accountClassificationName: string;
  currencyName: string;
  ledgerSubClassName: string;
  ledgerClassName: string;
  branchID: ID;
  id: ID;
  ledgerclass: {
    name: string;
  };
  ledgerClass: {
    name: string;
  };

  branchName: string;
  configId: string;
  branchCode: string;
  mailMessage: string;
  messageStatus: string;
  createdDate: string;
};
export interface LedgerList {
  parentID: ID;
  id: ID;
  code: string;
  subName: string;
  acctName: string;
  name: string;
  ledgerClassID: ID;
  branchID: ID;
  ledgerSubClassID: ID;
  accountClassificationID: ID;
  currencyCode: ID;
  status: boolean;
  ledgerclass: {
    name: string;
  };
  ledgerClass: {
    name: string;
  };
  branch: {
    branchName: string;
  };
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

  const addLedger = useApiMutation<AuthResponse, FormData>({
    url: "/Ledger/new-ledger",
    method: "POST",
  });

  const updateList = useApiMutation<AuthResponse, FormData>({
    url: "/LedgerSubClass/ledger-subclass-details ",
    method: "POST",
  });

  const getLedgerClass = () =>
    useApiQuery<ClassList>(["ledgerclasslist"], {
      url: `/LedgerClass/ledgerclasslist`,
      method: "GET",
    });

  const getLedgerList = () =>
    useApiQuery<LedgerList>(["ledgerlist"], {
      url: `/Ledger/ledger-list`,
      method: "GET",
    });

  const getMessageList = () =>
    useApiQuery<LedgerList>(["messageledgerlist"], {
      url: `/MsgConfig/allmsgconfigs`,
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

    const getApprovalists = (MessageConfigId?: ID, MessageStatus?: ID) =>
      useApiQuery<LedgerList>(["approvalLedgerlist", MessageConfigId, MessageStatus], {
        url: `/Message/messagelist-filter`,
        method: "GET",
        params: {
          ...(MessageConfigId && { MessageConfigId }),
          ...(MessageStatus && { MessageStatus }),
        },
      });

  return {
    addList,
    addLedger,
    getLists,
    getLedgerList,
    updateList,
    getLedgerClass,
    getMessageList,
    getApprovalists
  };
};
