import { clerkClient } from "@clerk/express";
import { prisma } from "../../prisma/client.js";
import { normilizeUsername } from "../utils/normilize-username.js";

export const createNewUser = async (clerkId) => {
  const clerkUser = await clerkClient.users.getUser(clerkId);
  
  return await prisma.user.create({
    data: {
      clerkId: clerkUser.id,
      email: clerkUser.primaryEmailAddress.emailAddress,
      name : normilizeUsername(clerkUser.username)
    },
  });
};