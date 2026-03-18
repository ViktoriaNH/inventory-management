import { fetchMyInventory } from "../api/inventory-api";
import { Toolbar } from "../components/Toolbar";
import { MYPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { SECTION_LABELS } from "../data/labels";
import { QUERY_KEYS } from "../data/queries";
import { useApi } from "../hooks/useApi";
import { PageWrapper } from "../layouts/PageWrapper";
import { InventoryTable } from "../sections/InventoryTable";

export const MyPage = () => {
  const api = useApi();

  return (
    <PageWrapper>
      <InventoryTable
        title={SECTION_LABELS.MY_INVENTORIES}
        toolbar={(props) => <Toolbar {...props} />}
        queryKey={QUERY_KEYS.inventories.my}
        fetch={() => fetchMyInventory(api)}
        columns={MYPAGE_INVENTORIES_COLUMNS}
        selectable
      />
    </PageWrapper>
  );
};
