import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { createInventory } from "../api/inventory-api.js";
import { QUERY_KEYS } from "../data/queries.js";
import { useApi } from "./useApi.js";

export const useCreateInventory = () => {
  const api = useApi();

  const mutation = useMutation({
    mutationFn: (formData) => createInventory(api, formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.inventories.my,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.inventories.top,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.inventories.latest,
      });
    },

    onError: (error) => {
      console.error(error);
    },
  });

  return {
    createInventory: mutation.mutate,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
  };
};
