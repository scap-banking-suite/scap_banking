import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, ID } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export type BranchDataItem = {
  regionID: ID;
  branchName: string;
  branchAddress: string;
  branchMobile: string;
  branchState: string;
  branchManager: string;
  branchStatus: boolean;
  branchGLNumber: string;
  branchId: string;
  region: {
    regionalManagerEmail: string;
  };
};
export interface Branch {
  regionID: ID;
  branchName: string;
  branchAddress: string;
  branchMobile: string;
  branchState: string;
  branchManager: string;
  branchStatus: boolean;
  branchGLNumber: string;
  data: BranchDataItem[];
}

export const useBranches = () => {
  const addBranch = useApiMutation<AuthResponse, FormData>({
    url: "/Branch/newbranch ",
    method: "POST",
  });

  const getBranchLists = () =>
    useApiQuery<Branch>(["branches"], {
      url: `/Branch/branchlist`,
      method: "GET",
    });

    const updateBranch = useApiMutation<AuthResponse, FormData>({
      url: "/Branch/updatebranch ",
      method: "POST",
    });

  return {
    addBranch,
    getBranchLists,
    updateBranch
  };
};
