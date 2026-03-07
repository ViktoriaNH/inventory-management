import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { createInventory } from "../api/inventory-api.js";
import { QUERY_KEYS } from "../data/query-keys.js";
import { useApi } from "./useApi.js";

export const useCreateInventory = () => {
  const api = useApi();

  const mutation = useMutation({
    mutationFn: (formData) => createInventory(api, formData),

    // TODO: добавить оптом еще послендие инвентари

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.inventories.my,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.inventories.top,
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });

  return {
    createInventory: mutation.mutate,
    isError: mutation.isError,
  };
};
