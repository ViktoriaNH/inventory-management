export const syncUser = (api) => {
  return api("/api/users", {
    method: "POST",
  });
};

export const fetchMyProfile = (api) => {
  return api('/api/users/profile')
}
