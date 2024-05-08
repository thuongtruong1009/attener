import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
