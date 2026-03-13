import { useState } from "react";

export const useSelectInventory = (inventoriesIds) => {
  const [selectedInventories, setSelectedInventories] = useState([]);

  const total = inventoriesIds.length;
  const allInventoriesSelected =
    total > 0 && selectedInventories.length === total;

  const toggleAllInventories = (needAllSelected) => {
    needAllSelected ?
      setSelectedInventories(inventoriesIds)
    : setSelectedInventories([]);
  };

  const toggleInventory = (inventoryId) => {
    setSelectedInventories((currentIds) =>
      currentIds.includes(inventoryId) ?
        currentIds.filter((id) => id !== inventoryId)
      : [...currentIds, inventoryId],
    );
  };

  const clearSelectedInventories = () => {
    setSelectedInventories([])
  }

  return {
    allInventoriesSelected,
    toggleInventory,
    toggleAllInventories,
    selectedInventories,
    clearSelectedInventories
  };
};
