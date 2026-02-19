import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { clerkId, email, name } = req.body;

    if (!clerkId || !email || !name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (user) {
      return res.status(200).json({ message: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: { clerkId, email, name },
    });

    return res.status(201).json({ message: "User was registered" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
