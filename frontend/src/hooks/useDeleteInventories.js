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
   // TODO: в других хуках тоже использовать
    QUERY_INVENTORIES_KEYS.forEach((key) =>
      queryClient.invalidateQueries({ queryKey: key }),
    );
  };

  const mutation = useMutation({
    mutationFn: (ids) => deleteInventories(api, ids),
    // TODO: надо решить с неймингом апи и вызовов функций

    onSuccess: () => {
      showToast(ALERT_MESSAGES.SUCCESS_DELETING);
      invalidateInventories();
    },

    onError: (error) => {
      console.error(error);
      showToast(ALERT_MESSAGES.FETCH_ERROR);
    },
  });

  return {
    mutateDeleteInventories: mutation.mutate,
    isError: mutation.isError,
    isPending: mutation.isPending,
  };
};
