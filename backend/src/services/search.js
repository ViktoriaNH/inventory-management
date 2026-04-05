import { prisma } from "../../prisma/client.js";

export const searchByText = async (searchText) => {
  const result = await prisma.$queryRaw`
    SELECT title
    FROM "Inventory"
    WHERE search_vector @@ plainto_tsquery(${searchText})
  `;
  return result;
};
