import { createInventoryLink } from "../helpers/create-inventory-link";

export const MAINPAGE_INVENTORIES_COLUMNS = [
  { label: "Title", field: "title", type: "link", getLink: createInventoryLink },
  { label: "Description", field: "description", type: "markdown" },
  { label: "Creator", field: "creator", type: "text" },
];

export const MYPAGE_INVENTORIES_COLUMNS = [
  { label: "Title", field: "title", type: "link", getLink: createInventoryLink },
  { label: "Description", field: "description", type: "markdown" }
];