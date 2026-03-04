export const Button = ({
  text,
  onClick,
  className,
  variant = "outline-dark",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
