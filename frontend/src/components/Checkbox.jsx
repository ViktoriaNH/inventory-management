export const Checkbox = ({ name, label }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input bg-dark border-dark"
        type="checkbox"
      />
      {label && (
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};
