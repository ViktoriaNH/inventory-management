import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/category-api";
import { QUERY_KEYS } from "../data/query-keys";
import { useApi } from "./useApi";

export const useCategories = () => {
  const api = useApi();

  return useQuery({
    queryKey: QUERY_KEYS.categories.all,
    queryFn: () => fetchCategories(api),
  });
};
