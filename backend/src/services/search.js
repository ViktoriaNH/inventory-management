import { prisma } from "../../prisma/client.js";

export const searchByText = async (text) => {
  const searchText = `${text.trim()}:*`;

  const result = await prisma.$queryRaw`
    SELECT 
      i.id,
      i.title,
      i.description,
      u.name AS "creatorName"
    FROM "inventories" i
    JOIN "users" u ON i.creator_id = u.id
    WHERE i.search_vector @@ plainto_tsquery('english', ${searchText})
  `;

  return result.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    creator: {
      name: row.creatorName,
    },
  }));
};
