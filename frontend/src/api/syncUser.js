export const syncUser = async () => {
  const response = await fetch("/api/users", {
    method: "POST",
    credentials: "include",
  });
  const data = await response.json();
  return data;
};
