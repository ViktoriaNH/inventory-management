import { Test } from "../components/Test";
import { InventorySettings } from "../section/InventorySettings";

export const SECTION_LABELS = {
  TOP_INVENTORIES: "Popular inventories",
  LATEST_INVENTORIES: "Latest inventories",
  MY_INVENTORIES: "My inventories",
};

export const INVENTORY_LABELS = {
  CATEGORY: "Category",
  CREATED_AT: "Created at",
  CREATOR: "Creator",
  DESCRIPTION: "Description",
};

export const TABS_LABELS = [
  { id: "items", title: "Items", component: Test },
  {
    id: "discussion",
    title: "Discussion",
    component: Test,
  },
  { id: "settings", title: "Settings", component: InventorySettings },
  { id: "custom", title: "Custom ID", component: Test },
  { id: "access", title: "Access", component: Test },
  { id: "fields", title: "Custom fields", component: Test },
  {
    id: "statistics",
    title: "Statistics",
    component: Test,
  },
];
