import { useFormContext } from "react-hook-form";

export const Select = ({ name, label, options = [], required }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        defaultValue=""
        {...register(name, { required })}
      >
        <option value="" disabled>
          Select category
        </option>
        {options.length === 0 && (
          <option value="" disabled>
            No categories available
          </option>
        )}

        {options.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
