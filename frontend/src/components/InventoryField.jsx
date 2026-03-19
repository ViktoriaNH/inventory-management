export const InventoryField = ({label, children}) => {
  return (
    <div className="row mb-2">
      <span className='col-12 col-md-2 text-muted fw-semibold mb-0 mb-md-1'>{label}</span>
      <div className='col-12 col-md-9'>{children}</div>
    </div>
  );
};
