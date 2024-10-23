import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse, User } from "../type";
import { useApiQuery } from "@/hooks/useApiQuery";

export const useUsers = () => {
  const addUser = useApiMutation<AuthResponse, FormData>({
    url: "/UserProfile/myprofile ",
    method: "POST",
  });

  const getAllUsers = () =>
    useApiQuery<User>(["allUsers"], {
      url: `/UserProfile/allProfiles`,
      method: "GET",
    });

  return {
    addUser,
    getAllUsers,
  };
};
