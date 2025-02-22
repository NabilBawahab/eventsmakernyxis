"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { color } from "framer-motion";
export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
