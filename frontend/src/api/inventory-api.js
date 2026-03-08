export const fetchTopInventories = async (api) => {
  return api("/api/inventories/top");
};

export const fetchLatestInventories = async (api) => {
  return api("/api/inventories/latest");
};

export const createInventory = (api, formData) => {
  return api("/api/inventories/create", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
