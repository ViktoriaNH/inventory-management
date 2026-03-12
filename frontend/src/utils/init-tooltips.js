import { Tooltip } from "bootstrap";

export const initTooltips = () => {
  const elements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  [...elements].forEach((el) => new Tooltip(el));
};

