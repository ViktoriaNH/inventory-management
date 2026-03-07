import { handleError } from "../helpers/handle-error.js";
import { getCategories } from "../services/category.js";

export const getCategoriesController = async (req, res) => {
  try {
    const categories = await getCategories();

    return res.status(200).json(categories);
  } catch (error) {
    handleError(res, error);
  }
};
