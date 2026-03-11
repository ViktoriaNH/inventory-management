export const InventoryField = ({label, children}) => {
  return (
    <div className="row mb-2">
      <span className='col-12 col-md-3 text-muted fw-semibold mb-1 mb-md-0'>{label}</span>
      <div className='col-12 col-md-9'>{children}</div>
    </div>
  );
};
