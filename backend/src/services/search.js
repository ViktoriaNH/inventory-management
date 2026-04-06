import { prisma } from "../../prisma/client.js";

export const searchByText = async (text) => {
  const result = await prisma.$queryRaw`
    SELECT title
    FROM "inventories"
    WHERE search_vector @@ plainto_tsquery('english', ${text})
  `;
  return result;
};
