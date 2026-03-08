import { FormProvider, useForm } from "react-hook-form";

export const FormWrapper = ({ children, onSubmit }) => {
  const methods = useForm();

  const handleSubmit = (formData) => {
    onSubmit(formData, methods.reset)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};
