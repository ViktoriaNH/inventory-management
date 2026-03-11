export const QUERY_KEYS = {
  categories: {
    all: ["categories", "all"],
  },
  inventories: {
    my: ["inventories", "my"],
    top: ["inventories", "top"],
    latest: ["inventories", "latest"],
    byId: (inventoryId) => ['inventories', 'byId', inventoryId ]
  },
};