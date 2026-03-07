export const fetchTopInventories = async () => {
  const BACKEND = import.meta.env.VITE_BACKEND_URL;
  console.log("BACKEND =", BACKEND);

  const response = await fetch(`${BACKEND}/api/inventories/top`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error();
  }

  console.log("STATUS =", response.status);
  return response.json();
};

export const createInventory = (api, formData) => {
  return api("/api/inventories/create", 'POST', { 
    body: JSON.stringify(formData) 
  });
};
