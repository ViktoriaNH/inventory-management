import { useFormContext } from "react-hook-form";

export const Input = ({ name, label, required, as = "input" }) => {
  const {
    register,
    // TODO: рзабораться с ошибками, как их использовать
    // formState: { errors },
  } = useFormContext();

  const Component = as;

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Component
        id={name}
        className="form-control"
        type={as === "input" ? "text" : undefined}
        {...register(name, { required })}
      />
    </>
  );
};
