export const getAnyInventoryController = async (req, res) => {
    const { id } = req.params()
  try {
    const inventories = await getAnyInventory(id);
    res.status(200).json(inventories);
  } catch (error) {
    handleError(res, error);
  }
};
