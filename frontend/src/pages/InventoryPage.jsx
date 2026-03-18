import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { TABS_LABELS } from "../data/labels";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useInventories } from "../hooks/useInventories";
import { renderQueryState } from "../utils/render-query-state";
import { QUERY_KEYS } from "../data/queries";
import { fetchInventoryById } from "../api/inventory-api";
import { Header } from "../layouts/Header";
import { PageWrapper } from "../layouts/PageWrapper";

export const InventoryPage = () => {
  const { inventoryId } = useParams();
  const api = useApi();

  const ACTIVE_TAB = "settings";

  const queryKey = QUERY_KEYS.inventories.byId(inventoryId);
  const fetchInventory = () => fetchInventoryById(api, inventoryId);

  const { data, isError, isPending } = useInventories(queryKey, fetchInventory);

  const queryState = renderQueryState({ data, isPending, isError });

  return (
    <PageWrapper>
      <Tabs
        id="uncontrolled-tab-example"
        className="justify-content-md-center flex-wrap mb-3"
        defaultActiveKey={ACTIVE_TAB}
        mountOnEnter
        unmountOnExit
      >
        {TABS_LABELS.map((tab) => {
          const Component = tab.component;
          return (
            <Tab
              tabClassName="text-secondary link-dark"
              key={tab.id}
              eventKey={tab.id}
              title={tab.title}
            >
              {queryState ?
                queryState
              : <Component data={data} inventoryId={inventoryId} />}
            </Tab>
          );
        })}
      </Tabs>
    </PageWrapper>
  );
};
