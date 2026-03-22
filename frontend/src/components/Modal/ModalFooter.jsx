import { Button } from "../Button";

export const ModalFooter = ({
  submit = "Submit",
  cancel = "Cancel",
  variant = "secondary",
   onClose
}) => {
  return (
    <div className="modal-footer">
      <Button text={cancel} onClick={onClose}/>
      <Button text={submit} type="submit" variant={variant} />
    </div>
  );
};
