import { useQuery } from "@tanstack/react-query";

export const useInventories = (queryKey, queryFn) => {
  return useQuery({
    queryKey,
    queryFn,
  });
};
