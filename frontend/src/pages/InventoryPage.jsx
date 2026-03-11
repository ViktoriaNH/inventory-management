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

export const InventoryPage = () => {
  const { inventoryId } = useParams();
  const api = useApi();

  const ACTIVE_TAB = "settings";

  const queryKey = QUERY_KEYS.inventories.byId(inventoryId);
  const fetchInventory = () => fetchInventoryById(api, inventoryId);

  const { data, isError, isPending } = useInventories(queryKey, fetchInventory);

  const queryState = renderQueryState({ data, isPending, isError });

  return (
    <>
      <Header>
        <Tabs
          id="uncontrolled-tab-example"
          className="mb-3"
          defaultActiveKey={ACTIVE_TAB}
        >
          {TABS_LABELS.map((tab) => {
            const Component = tab.component;
            return (
              <Tab key={tab.id} eventKey={tab.id} title={tab.title}>
                {queryState ?
                  queryState
                : <Component inventory={data} inventoryId={inventoryId} />}
              </Tab>
            );
          })}
        </Tabs>
      </Header>
    </>
  );
};
