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

export const createInventory = async (formData) => {
  const BACKEND = import.meta.env.VITE_BACKEND_URL;
  console.log("BACKEND =", BACKEND);

  const response = await fetch(`${BACKEND}/api/inventories/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw Error();
  }

  console.log("STATUS =", response.status);
  return response.json();
};
