export const Checkbox = ({ name, label, isChecked, onChange }) => {
  return (
    <div>
      <input
        className="form-check-input shadow-none"
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
