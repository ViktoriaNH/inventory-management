export const getTopInventories = async () => {
  try {
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
  } catch (e) {
    onError(e);
  }
};

export const getLatestInventories = async () => {
  try {
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
  } catch (e) {
    onError(e);
  }
};

export const createInentory = () => {
  
}
