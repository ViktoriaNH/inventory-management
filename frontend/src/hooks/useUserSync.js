import { useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { syncUser } from "../api/syncUser";

export const useSyncUser = () => {
  const { isLoaded, isSignedIn, getToken } = useUser();
  const syncedRef = useRef(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || syncedRef.current) return;

    (async () => {
      const token = await getToken;
      await syncUser(token);
      syncedRef.current = true;
    })();
  }, [isLoaded, isSignedIn, getToken]);
};
