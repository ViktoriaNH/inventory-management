import { useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { syncUser } from "../api/user-api";
import { useApi } from "./useApi";

export const useSyncUser = () => {
  const { isLoaded, isSignedIn } = useUser();
  const syncedRef = useRef(false);
  const api = useApi();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || syncedRef.current) return;

    (async () => {
      await syncUser(api);
      syncedRef.current = true;
    })();
  }, [isLoaded, isSignedIn, api]);
};
