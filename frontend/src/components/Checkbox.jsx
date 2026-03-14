export const Checkbox = ({ name, label, isChecked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input shadow-none"
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        id={name}
      />
      {label && (
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};
