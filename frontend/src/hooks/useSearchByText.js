import { useQuery } from "@tanstack/react-query";
import { useApi } from "./useApi";
import { QUERY_KEYS } from "../data/queries";
import { fetchSearchByText } from "../api/search-api";

export const useSearchByText = (text) => {
  const api = useApi();

  return useQuery({
    queryKey: QUERY_KEYS.text.searchByText(text),
    queryFn: () => fetchSearchByText(api, text),
    enabled: !!text,
  });
};
