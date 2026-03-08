export const formatCellValue = (row, field) => {
  const value = row[field];

  if (typeof value === "object") {
    return value.name;
  }

  return value;
};
