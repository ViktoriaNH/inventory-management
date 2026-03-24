import { useUser } from "@clerk/clerk-react";

export const useClerkAuthStatus = () => {
  const { isLoaded, isSignedIn } = useUser();
  
  const isAuth = isLoaded && isSignedIn;

  return { isAuth };
};
