import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse } from "../type";

export const signIn = () => {
  const loginUser = useApiMutation<AuthResponse, FormData>({
    url: "/UserProfile/profilelogin ",
    method: "POST",
  });

  return {
    loginUser,
  };
};
