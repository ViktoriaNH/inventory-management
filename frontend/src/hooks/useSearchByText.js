import { useQuery } from "@tanstack/react-query";
import { useApi } from "./useApi";
import { QUERY_KEYS } from "../data/queries";
import { fetchSearchByText } from "../api/search-api";

export const useSearchByText = (searchText) => {
  const api = useApi();

  return useQuery({
    queryKey: QUERY_KEYS.text.searchByText(searchText),
    queryFn: () => fetchSearchByText(api, searchText),
    enabled: !!searchText,
  });
};
