import { prisma } from "../../prisma/client.js";

export const getUserFromClerk = async (req) => {
  const { userId: clerkId } = req.auth();

  const user = await prisma.user.findUnique({
    where: { clerkId },
  });

  return user;
};
