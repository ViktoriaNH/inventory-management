import { useEffect } from "react";
import { TOOLBAR_BUTTONS } from "../data/toolbar-buttons";
import { initTooltips } from "../utils/init-tooltips";

export const Toolbar = ({onAction, isDeleting}) => {
  useEffect(() => {
    initTooltips();
  }, []);

  return (
    <div className="mb-4 d-flex justify-content-center gap-2 mt-3">
      {TOOLBAR_BUTTONS.map(({ id, label, title, icon, disabled }) => (
        <button
          key={id}
          type="button"
          className="btn btn-outline-dark d-flex align-items-center gap-2 px-3"
          title={title}
          data-bs-toggle="tooltip"
          disabled={disabled || isDeleting}
          onClick={() => onAction(id)}
        >
          {icon && <i className={`bi bi-${icon}`}></i>}
          {label && <span>{label}</span>}
        </button>
      ))}
    </div>
  );
};
