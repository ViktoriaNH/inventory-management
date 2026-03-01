const DASHBOARD_MODES = {
  GUEST: "guest",
  ADMIN: "admin",
  USER: "user",
};

export const selectModeDashboard = ({ isSignedIn, role }) => {
  if (!isSignedIn) return DASHBOARD_MODES.GUEST;
  if (role === "ADMIN") return DASHBOARD_MODES.ADMIN;
  return DASHBOARD_MODES.USER;
};
