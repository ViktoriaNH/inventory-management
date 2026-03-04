import { FormProvider, useForm } from "react-hook-form";

export const FormWrapper = ({ children, onSubmit }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
