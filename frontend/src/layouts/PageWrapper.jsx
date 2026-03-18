import { Button } from "../components/Button";
import { HelpModal } from "../components/HelpModal";
import { Header } from "../layouts/Header";

export const PageWrapper = ({ children, className, onSubmit }) => {
      const handleHelp = (data) => {
    onSubmit(data);
  };
  
  return (
    <>
      <Header />
      <main className={`container ${className}`}>
        {children}
        <Button
          text={<i className="bi bi-question-circle fs-4"></i>}
          className="position-fixed bottom-0 end-0 mb-3 me-3 mb-xl-5 me-xl-4 rounded-circle shadow"
          variant="secondary"
          data-bs-toggle="modal"
          data-bs-target="#helpModal"
        />
      </main>
      <HelpModal onSubmit={handleHelp}/>
    </>
  );
};
