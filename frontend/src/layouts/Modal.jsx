export const Modal = ({ id, title, children }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" data-bs-dismiss="modal" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
