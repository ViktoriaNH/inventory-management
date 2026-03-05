import { createInentory } from "../services/inventory";

export const createInventoryController = async (req, res) => {
  console.log("!!! МЫ ВНУТРИ КОНТРОЛЛЕРА !!!");

  //TODO: потом добавить проверку, есть ли доступ у юзера добавялть инвентарь
  try {
    const data = req.body;
    const { title, description, categoryId, imgUrl, isPublic, tag } = data;

    if (!title || !description || !categoryId || !tag) {
      return res.status(400).json({ message: "Fields are required" });
    }

    const inventoryData = {
      title,
      description,
      categoryId,
      imgUrl,
      isPublic,
      tag,
      creatorId,
    };

    const inventory = await createInentory({ inventoryData });

    res.status(201).json(inventory);
  } catch (error) {
    console.error("Критическая ошибка", error);
    return res.status(500).json({ message: "Server error" });
  }
};
