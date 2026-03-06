export const fetchCategories = async () => {
  const BACKEND = import.meta.env.VITE_BACKEND_URL;
  console.log("BACKEND =", BACKEND);

  const response = await fetch(`${BACKEND}/api/categories`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
