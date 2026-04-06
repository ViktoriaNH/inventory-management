import { prisma } from "../../prisma/client.js";

export const searchByText = async (text) => {
  const result = await prisma.$queryRaw`
    SELECT 
      i.id,
      i.title,
      i.description,
      u.name AS "creatorName"
    FROM "inventories" i
    JOIN "users" u ON i.creator_id = u.id
    WHERE i.search_vector @@ plainto_tsquery('english', ${text})
  `;

  return result;
};
