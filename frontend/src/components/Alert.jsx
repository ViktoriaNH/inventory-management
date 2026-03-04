export const Alert = (props) => {
  const { type = "danger", children } = props;

  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};
