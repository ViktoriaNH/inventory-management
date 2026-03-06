import { getUserFromClerk } from "./get-user-from-clerk.js";

export const checkUserInDB = async (req) => {
  const user = await getUserFromClerk(req);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }

  return user;
};