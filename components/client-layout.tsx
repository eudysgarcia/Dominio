"use client"

import { LanguageProvider } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default ClientLayout;
