import { handleError } from "../utils/handle-error.js";
import { getTopInventories } from "../services/inventory.js";

export const getTopInventoriesController = async (req, res) => {
  console.log("!!! МЫ ВНУТРИ КОНТРОЛЛЕРА !!!");
  try {
    console.log("Шаг 1: Запрашиваем данные из сервиса");
    const inventories = await getTopInventories();

    console.log("Шаг 2: Сервис вернул данные", inventories);

    console.log("Шаг 3: инвентари получены, отправляем данные на фронт");

    res.status(200).json(inventories);
  } catch (error) {
     handleError(res, error);
  }
};
