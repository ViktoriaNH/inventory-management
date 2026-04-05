import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { createInventory } from "../api/inventory-api.js";
import { QUERY_INVENTORIES_KEYS } from "../data/queries.js";
import { useApi } from "./useApi.js";
import { useToast } from "./useToast.js";
import { MESSAGES } from "../data/messages.js";

export const useCreateInventory = () => {
  const api = useApi();
  const { showToast } = useToast();

  const invalidateInventories = () => {
    QUERY_INVENTORIES_KEYS.forEach((key) =>
      queryClient.invalidateQueries({ queryKey: key }),
    );
  };

  const mutation = useMutation({
    mutationFn: (formData) => createInventory(api, formData),

    onSuccess: () => {
      showToast();
      invalidateInventories(MESSAGES.INVENTORY.CREATE_SUCCESS);
    },

    onError: () => {
      showToast(MESSAGES.INVENTORY.CREATE_ERROR);
    },
  });

  return {
    createInventory: mutation.mutate,
  };
};
