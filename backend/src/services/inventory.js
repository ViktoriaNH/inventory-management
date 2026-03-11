import { prisma } from "../../prisma/client.js";

export const getTopInventories = async () => {
  const inventories = await prisma.inventory.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      creator: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          items: true,
        },
      },
    },
    orderBy: {
      items: {
        _count: "desc",
      },
    },
    take: 5,
  });
  return inventories;
};

export const getLatestInventories = async () => {
  const inventories = await prisma.inventory.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      creator: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });
  return inventories;
};

export const getMyInventories = async (userId) => {
  const inventories = await prisma.inventory.findMany({
    where: {
      creatorId: userId,
    },
    select: {
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return inventories;
};

export const createInventory = async (inventoryData) => {
  const { title, description, categoryId, imgUrl, isPublic, creatorId } =
    inventoryData;

  const inventory = await prisma.inventory.create({
    data: {
      title,
      description,
      categoryId,
      imgUrl,
      isPublic,
      creatorId,
    },
  });

  return inventory;
};

export const getAnyInventory = async (id) => {
  const inventories = await prisma.inventory.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      description: true,
      isPublic: true,
      createdAt: true,
      category: { select: { name: true } },
      creator: { select: { name: true } },
    },
  });
  return inventories;
};
