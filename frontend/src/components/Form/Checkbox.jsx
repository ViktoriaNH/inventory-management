import { useFormContext } from "react-hook-form";

export const Checkbox = ({ name, label }) => {
  const { register } = useFormContext();
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        {...register(name)}
        id={name}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
