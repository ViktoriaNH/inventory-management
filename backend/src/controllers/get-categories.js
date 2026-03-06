import { handleError } from "../helpers/handle-error.js";
import { getCategories } from "../services/category.js";

export const getCategoriesController = async (req, res) => {
  console.log("!!! МЫ ВНУТРИ КОНТРОЛЛЕРА !!!");
  try {
    console.log("Шаг 1: Запрашиваем данные из сервиса");
    const categories = await getCategories();

    console.log("Шаг 2: Сервис вернул данные", categories);

    console.log("Шаг 3: инвентари получены, отправляем данные на фронт");

    return res.status(200).json(categories);
  } catch (error) {
    handleError(res, error);
  }
};
