export const syncUser = async (token) => {
  // TODO: сделать отдельный кнофиг для всех env на фронте
  const BACKEND = import.meta.env.VITE_BACKEND_URL;
  console.log("BACKEND =", BACKEND);

  const response = await fetch(`${BACKEND}/api/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  console.log("STATUS =", response.status);
  return response.json();
};
