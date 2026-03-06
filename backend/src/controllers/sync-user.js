import { getUserFromClerk } from "../helpers/get-user-from-clerk.js";
import { handleError } from "../helpers/handle-error.js";
import { createNewUser } from "../helpers/create-new-user.js";

export const syncUserController = async (req, res) => {
  console.log("!!! МЫ ВНУТРИ КОНТРОЛЛЕРА !!!");
  try {
    const user = await getUserFromClerk(req);
    console.log("Шаг 2: Поиск в БД завершен");

    if (user) {
      return res.status(200).json({ message: "User already exists" });
    }

    const { userId: clerkId } = req.auth();

    await createNewUser(clerkId);

    console.log("Шаг 4: Пользователь создан");
    return res.status(201).json({ message: "User was registered" });
  } catch (error) {
    handleError(res, error);
  }
};
