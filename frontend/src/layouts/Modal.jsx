export const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button className="btn-close" onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
