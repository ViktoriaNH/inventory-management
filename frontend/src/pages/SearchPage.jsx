import { useSearchParams } from "react-router-dom";
import { InventoryTable } from "../sections/InventoryTable";
import { SECTION_LABELS } from "../data/labels";
import { MAINPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { fetchSearchByText } from "../api/search-api";
import { useApi } from "../hooks/useApi";
import { QUERY_KEYS } from "../data/queries";
import { PageWrapper } from "../layouts/PageWrapper";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const api = useApi();
  const searchText = searchParams.get("query");

  return (
    <PageWrapper>
      <InventoryTable
        title={SECTION_LABELS.FOUND_INVENTORIES}
        queryKey={QUERY_KEYS.text.searchByText(searchText)}
        fetch={() => fetchSearchByText(api, searchText)}
        columns={MAINPAGE_INVENTORIES_COLUMNS}
      />
    </PageWrapper>
  );
};
