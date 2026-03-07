export const syncUser = (api) => {
  return api("/api/users", {
    method: "POST",
  });
};
