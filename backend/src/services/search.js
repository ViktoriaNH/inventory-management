import { prisma } from "../../prisma/client.js";

export const searchByText = async (text) => {
  const result = await prisma.$queryRaw`
    SELECT title
    FROM "Inventory"
    WHERE search_vector @@ plainto_tsquery(${text})
  `;
  return result;
};
