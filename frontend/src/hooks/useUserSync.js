import { useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { syncUser } from "../api/syncUser";

export const useSyncUser = () => {
  const { isLoaded, isSignedIn } = useUser();
  const syncedRef = useRef(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || syncedRef.current) return;

    (async () => {
      await syncUser();
      syncedRef.current = true;
    })();
  }, [isLoaded, isSignedIn]);
};
