export const Checkbox = ({ name, label, isChecked, onChange }) => {
  return (
    <div>
      <input
        className="form-check-input "
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
      />
      {label && (
        <label className="form-check-label ms-2" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};
