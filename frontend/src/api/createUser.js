export const createUser = async (name, email) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
    credentials: 'include',
  });

  const data = await response.json();
  return data;
};
