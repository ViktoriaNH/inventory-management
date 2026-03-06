import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/category-api";
import { QUERY_KEYS } from "../data/query-keys";

export const useCategories = () => {
  return useQuery({
    queryKey: QUERY_KEYS.categories.all,
    queryFn: fetchCategories,
  });
};
