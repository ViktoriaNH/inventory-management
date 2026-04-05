import { useMutation } from "@tanstack/react-query";
import { deleteInventories } from "../api/inventory-api";
import { MESSAGES } from "../data/messages";
import { useApi } from "./useApi";
import { QUERY_INVENTORIES_KEYS } from "../data/queries";
import { queryClient } from "../config/queryClient";
import { useToast } from "./useToast";

export const useDeleteInventories = () => {
  const api = useApi();
  const { showToast } = useToast();

  const invalidateInventories = () => {
    QUERY_INVENTORIES_KEYS.forEach((key) =>
      queryClient.invalidateQueries({ queryKey: key }),
    );
  };

  const mutation = useMutation({
    mutationFn: (ids) => deleteInventories(api, ids),

    onSuccess: () => {
      showToast(MESSAGES.INVENTORY.DELETE_SUCCESS);
      invalidateInventories();
    },

    onError: () => {
      showToast(MESSAGES.INVENTORY.DELETE_ERROR);
    },
  });

  return {
    mutateDeleteInventories: mutation.mutate,
    isPending: mutation.isPending,
  };
};
