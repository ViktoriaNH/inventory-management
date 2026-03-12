export const Checkbox = ({ name, label, isChecked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input text-center "
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
      />
      {label && (
        <label className="form-check-label ms-0" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};
