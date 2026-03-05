import { prisma } from "../../prisma/client.js";
import { clerkClient } from "@clerk/express";
import { getUserFromClerk } from "../helpers/get-user-from-clerk.js";

export const syncUserController = async (req, res) => {
  console.log("!!! МЫ ВНУТРИ КОНТРОЛЛЕРА !!!");
  try {
    const user = await getUserFromClerk(req);
    console.log("Шаг 2: Поиск в БД завершен");

    if (user) {
      return res.status(200).json({ message: "User already exists" });
    }

    const { userId: clerkId } = req.auth();
    const clerkUser = await clerkClient.users.getUser(clerkId);
    console.log("Шаг 3: Данные от Clerk получены");

    const newUser = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.primaryEmailAddress.emailAddress,
        name: clerkUser.username,
      },
    });
    console.log("Шаг 4: Пользователь создан");
    return res.status(201).json({ message: "User was registered" });
  } catch (error) {
    console.error("Критическая ошибка", error);
    return res.status(500).json({ message: "Server error" });
  }
};
