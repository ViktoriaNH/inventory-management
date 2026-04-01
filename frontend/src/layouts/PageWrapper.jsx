import { Button } from "../components/Button";
import { HelpModal } from "../components/Modal/HelpModal";
import { useModal } from "../hooks/useModal";
import { Header } from "../layouts/Header";
import { useTheme } from "../hooks/useTheme";

export const PageWrapper = ({ children, className, onSubmit }) => {
  const helpModal = useModal();
  const { theme, toggleTheme } = useTheme();

  const handleHelp = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className={`container ${className}`}>
        {children}
        <Button
          text={<i className="bi bi-question-circle fs-4"></i>}
          className="position-fixed bottom-0 end-0 mb-3 me-3 mb-xl-5 me-xl-4 rounded-circle shadow"
          variant="secondary"
          onClick={helpModal.open}
        />
      </main>
      <HelpModal
        isOpen={helpModal.isOpen}
        onSubmit={handleHelp}
        onClose={helpModal.close}
      />
    </>
  );
};
