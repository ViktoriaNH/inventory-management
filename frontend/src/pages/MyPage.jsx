import { fetchMyInventory } from "../api/inventory-api";
import { fetchMyProfile } from "../api/user-api";
import { Toolbar } from "../components/Toolbar";
import { MYPAGE_INVENTORIES_COLUMNS } from "../data/columns";
import { SECTION_LABELS } from "../data/labels";
import { QUERY_KEYS } from "../data/queries";
import { useApi } from "../hooks/useApi";
import { PageWrapper } from "../layouts/PageWrapper";
import { InventoryTable } from "../sections/InventoryTable";
import { MyProfile } from "../sections/MyProfile";

export const MyPage = () => {
  const api = useApi();

  return (
    <PageWrapper className='d-flex flex-column gap-5'>
      <MyProfile
        queryKey={QUERY_KEYS.users.myProfile}
        fetch={() => fetchMyProfile(api)}
      />
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
