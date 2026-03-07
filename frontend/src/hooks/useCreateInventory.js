import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { createInventory } from "../api/inventory-api.js";
import { QUERY_KEYS } from "../data/query-keys.js";
import { useAuth } from "@clerk/clerk-react";

export const useCreateInventory = () => {
    const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: createInventory,
        const token = await getToken(),


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
