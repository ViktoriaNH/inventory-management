export const fetchTopInventories = async (api) => {
  return api("/api/inventories/top");
};

export const createInventory = (api, formData) => {
  return api("/api/inventories/create", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
