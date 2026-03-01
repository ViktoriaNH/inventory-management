import { useUser } from "@clerk/clerk-react";
import { Header } from "./Header";
import { selectModeDashboard } from "../utils/selectModeDashboard";

export const Dashboard = () => {
    const { isSignedIn } = useUser();
    // const role = 
    const mode = selectModeDashboard({isSignedIn, role})

  return (
    <>
      <Header />
      <PageContent mode={mode} />
    </>
  );
};
