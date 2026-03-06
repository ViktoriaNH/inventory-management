export const formInventoryData = (data, userId) => {
  const { title, description, categoryId, imgUrl, isPublic } = data;

  return {
    title,
    description,
    categoryId,
    imgUrl,
    isPublic,
    creatorId: userId,
  };
};