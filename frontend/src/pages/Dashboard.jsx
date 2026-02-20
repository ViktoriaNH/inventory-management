import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
// import { createUser } from "../api/createUser";

export const Dasboard = () => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn) return;

    // const clerkId = user.id;
    // const email = user.
    // const name - user.

      console.log("USER OBJECT:", user);

    // createUser(username, email);
  }, [isSignedIn, user]);

  return <div>Страница</div>;
};
