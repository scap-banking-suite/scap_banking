import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, Config } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";


export const useApprovalConfig = () => {
  const addApprovalConfig = useApiMutation<AuthResponse, FormData>({
    url: "/MsgConfig/createmsgconfig ",
    method: "POST",
  });

  const updateApprovalConfig = useApiMutation<AuthResponse, FormData>({
    url: "/MsgConfig/updatemsgconfigs ",
    method: "POST",
  });

  const getApprovalConfigLists = () =>
    useApiQuery<Config>(["config"], {
      url: `/MsgConfig/allmsgconfigs`,
      method: "GET",
    });

   

  return {
    addApprovalConfig,
    updateApprovalConfig,
    getApprovalConfigLists
  };
};
