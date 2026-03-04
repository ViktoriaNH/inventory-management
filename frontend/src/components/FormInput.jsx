import { useFormContext } from "react-hook-form";

export const FormInput = ({ name, label, as = "input" }) => {
  const {
    register,
    // TODO: рзабораться с ошибками, как их использовать
    // formState: { errors },
  } = useFormContext();
  const Component = as;

  return (
    <>
      {label && <label>{label}</label>}
      <Component {...register(name)} />
    </>
  );
};
