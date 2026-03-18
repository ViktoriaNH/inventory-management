export const Button = ({
  text,
  onClick,
  className,
  variant = "outline-dark",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};
