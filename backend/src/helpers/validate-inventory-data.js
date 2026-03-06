export const validateInventoryData = (data) => {
  const { title, description, categoryId } = data;

  if (!title || !description || !categoryId) {
    const error = new Error("Fields are required");
    error.status = 400;
    throw error;
  }
};