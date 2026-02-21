import { prisma } from "../../prisma/client.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const createUser = async (req, res) => {
  try {
    const clerkId = req.auth.userId;

    const clerkUser = await clerkClient.users.getUser(clerkId);

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (user) {
      return res.status(200).json({ message: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.primaryEmailAddress.emailAddress,
        name: clerkUser.username,
      },
    });

    return res.status(201).json({ message: "User was registered" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
