import { prisma } from "../../prisma/client.js";

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return categories;
};

