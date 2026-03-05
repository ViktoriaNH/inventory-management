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
      _count: {
        items: "desc",
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
      created_at: "desc",
    },
    take: 5,
  });
  return inventories;
};

export const createInventory = async ({ inventoryData }) => {
  const { title, description, categoryId, imgUrl, isPublic, tag, creatorId } =
    inventoryData;

  const inventory = await prisma.inventory.create({
    data: {
      title,
      description,
      categoryId,
      imgUrl,
      isPublic,
      tag,
      creatorId 
    },
  });

  return inventory;
};
