"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, type State } from "wagmi";
import { config } from "../config";

const queryClient = new QueryClient()

export function Providers({
         children,
         initialState,
       }: {
         children: React.ReactNode, 
         initialState: State | undefined
       }) {
         return (
           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
             <WagmiProvider config={config} initialState={initialState}>
               <QueryClientProvider client={queryClient}>
                 {children}
               </QueryClientProvider>
             </WagmiProvider>
           </ThemeProvider>
         );
       }
