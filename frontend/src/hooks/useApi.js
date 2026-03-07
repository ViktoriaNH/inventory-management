import { useAuth } from "@clerk/clerk-react";
import { createApi } from "../utils/create-api.js";

export const useApi = () => {
  const { getToken } = useAuth();

  const api = createApi(getToken);

  return api;
};
