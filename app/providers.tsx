'use client';
import { useEffect } from "react";
import {initGA, logPageView} from "@/utils/analytics";
import { ThemeProvider } from './theme-provider';

function Providers({ children }: { children: React.ReactNode }) {
  useEffect(()=>{
    initGA();
    logPageView();
  },[]);
    return (
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      );
}
export default Providers;