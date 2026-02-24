const Button = (props) => {
  const { text, onClick, variant = "outline-dark", type = "button" } = props;

  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
