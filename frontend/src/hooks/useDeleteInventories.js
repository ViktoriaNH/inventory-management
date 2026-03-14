import { useMutation } from "@tanstack/react-query";
import { deleteInventories } from "../api/inventory-api";
import { ALERT_MESSAGES } from "../data/alert-messages";
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
      showToast(ALERT_MESSAGES.SUCCESS_DELETING);
      invalidateInventories();
    },

    onError: () => {
      showToast(ALERT_MESSAGES.ERROR_DELETING);
    },
  });

  return {
    mutateDeleteInventories: mutation.mutate,
    isPending: mutation.isPending,
  };
};
