export const InventoryField = ({label, children}) => {
  return (
    <div>
      <span>{label}</span>
      <div>{children}</div>
    </div>
  );
};
