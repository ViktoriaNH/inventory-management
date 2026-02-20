export const createUser = async (username, email) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email }),
  });

  const data = await response.json();
  return data;
};
