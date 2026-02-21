import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { createUser } from "../api/createUser";
import { Header } from "../components/Header";

export const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    createUser();
  }, [isLoaded, isSignedIn, user]);

  return (
    <>
      <Header />
    </>
  );
};
