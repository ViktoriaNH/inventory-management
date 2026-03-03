import { getTopInventories } from "../services/inventory.js";

export const getTopInventoriesController = async (req, res) => {
  console.log("!!! МЫ ВНУТРИ КОНТРОЛЛЕРА !!!");
  try {
    console.log("Шаг 1: Запрашиваем данные из сервиса");
    const inventories = await getTopInventories();

    console.log("Шаг 2: Сервис вернул данные", inventories);

    if (!inventories) {
      console.log("Шаг 3: Нет инвентарей");
      res.status(200).json([]);
    }

    console.log("Шаг 3: инвентари получены, отправляем данные на фронт");

    res.status(200).json(inventories);
  } catch (error) {
    console.error("Критическая ошибка", error);
    return res.status(500).json({ message: "Server error" });
  }
};
