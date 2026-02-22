export const syncUser = async () => {
  const BACKEND = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${BACKEND}/api/users`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();
  return data;
};
