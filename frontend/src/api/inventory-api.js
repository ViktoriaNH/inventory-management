export const fetchTopInventories = async (api) => {
  return api("/api/inventories/top");
};

export const fetchLatestInventories = async (api) => {
  return api("/api/inventories/latest");
};

export const createInventory = async (api, formData) => {
  return api("/api/inventories/create", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const fetchMyInventory = async (api) => {
  return api("/api/inventories/my");
};

export const fetchInventoryById = async (api, inventoryId) => {
  return api(`/api/inventories/${inventoryId}`);
};
