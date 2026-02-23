import { useEffect, useRef } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { syncUser } from "../api/syncUser";

export const useSyncUser = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const syncedRef = useRef(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || syncedRef.current) return;

    (async () => {
      const token = await getToken();
      console.log("Токен получен");

      if (!token) {
        console.log("Токен не получен");
        return;
      }

      await syncUser(token);
      syncedRef.current = true;
    })();
  }, [isLoaded, isSignedIn, getToken]);
};
