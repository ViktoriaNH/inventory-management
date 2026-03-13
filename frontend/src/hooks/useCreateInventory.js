import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { createInventory } from "../api/inventory-api.js";
import { QUERY_KEYS } from "../data/queries.js";
import { useApi } from "./useApi.js";
import { useToast } from "./useToast.js";
import { ALERT_MESSAGES } from "../data/alert-messages.js";

export const useCreateInventory = () => {
  const api = useApi();
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (formData) => createInventory(api, formData),

    onSuccess: () => {
      showToast(ALERT_MESSAGES.CREATE_INVENTORIES);
      
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
  };
};
