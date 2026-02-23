export const syncUser = async () => {
  const BACKEND = import.meta.env.VITE_BACKEND_URL;
  console.log("BACKEND =", BACKEND);

  const response = await fetch(`${BACKEND}/api/users`, {
    method: "POST",
    credentials: "include",
  });

  console.log("STATUS =", response.status);
  return response.json();
};
