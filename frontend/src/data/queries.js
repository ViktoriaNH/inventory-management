export const QUERY_KEYS = {
  categories: {
    all: ["categories", "all"],
  },
  inventories: {
    my: ["inventories", "my"],
    top: ["inventories", "top"],
    latest: ["inventories", "latest"],
    byId: (inventoryId) => ["inventories", "byId", inventoryId],
  },
};

export const QUERY_INVENTORIES_KEYS = [
  QUERY_KEYS.inventories.my,
  QUERY_KEYS.inventories.top,
  QUERY_KEYS.inventories.latest,
];
