"use client";

import { ReactNode, useEffect, useRef, useCallback, useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

export const AutoLogout = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const { logout } = useAuthStore();

  const router = useRouter();
  const pathname = usePathname();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const signOut = useCallback(() => {
      logout()
      Cookies.remove("accessToken");
    toast.error("Session expired due to inactivity.");
    setTimeout(() => {
      router.push("/login");
    }, 0);
  }, [router]);

  const shouldAutoLogout = [
    "/auth/login",
    "/auth/reset-password",
  ]?.includes(pathname);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(signOut, 600000); // 10 minutes
  }, [signOut]);

  useEffect(() => {
    if (!shouldAutoLogout) {
      const events = [
        "mousemove",
        "mousedown",
        "keypress",
        "scroll",
        "touchstart",
      ];

      const resetEvents = () => {
        resetTimer();
      };

      events.forEach((event) => {
        window.addEventListener(event, resetEvents);
      });

      resetTimer(); // Start the timer when the component mounts

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        events.forEach((event) => {
          window.removeEventListener(event, resetEvents);
        });
      };
    }
  }, [resetTimer, shouldAutoLogout]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};
