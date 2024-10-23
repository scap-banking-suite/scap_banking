import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, Branch } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

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
