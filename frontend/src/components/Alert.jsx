export const Alert = (props) => {
  const { type = "success", children } = props;

  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};
