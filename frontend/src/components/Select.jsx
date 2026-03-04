import { useFormContext } from "react-hook-form";

export const Select = ({ name, label, options = [], required }) => {
    const {register} = useFormContext();
  return (
    <div>
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        defaultValue=""
        {...register(name, { required })}
      >
        <option value="" disabled>
          {options}
        </option>
      </select>
    </div>
  );
};
