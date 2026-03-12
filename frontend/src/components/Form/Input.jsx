import { useFormContext } from "react-hook-form";

export const Input = ({ name, label, required, as = "input" }) => {
  const {
    register,
  } = useFormContext();

  const Component = as;

  return (
    <div className="mb-3">
      {label && <label htmlFor={name}>{label}</label>}
      <Component
        id={name}
        className="form-control"
        type={as === "input" ? "text" : undefined}
        {...register(name, { required })}
      />
    </div>
  );
};
