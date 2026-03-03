export const fetchTopInventories = async () => {
  const BACKEND = import.meta.env.VITE_BACKEND_URL;
  console.log("BACKEND =", BACKEND);

  const response = await fetch(`${BACKEND}/inventories/top`, {
    method: 'GET'
  });
      
  console.log("STATUS =", response.status);
  return response.json();
};
