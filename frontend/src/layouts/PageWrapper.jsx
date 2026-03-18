import { Header} from '../layouts/Header'

export const PageWrapper = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`container px-3 px-sm-4 ${className}`}>
        {children}
      </main>
    </>
  );
};