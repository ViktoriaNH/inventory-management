export const ModalFooter = ({
  submit = "Submit",
  cancel = "Cancel",
  variant = "secondary",
}) => {
  return (
    <div className="modal-footer">
      <Button text={cancel} data-bs-dismiss="modal" />
      <Button text={submit} type="submit" variant={variant} />
    </div>
  );
};
