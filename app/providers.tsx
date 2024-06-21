'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { config } from '../wagmi';
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

export function Providers({
         children,
       }: {
         children: React.ReactNode
       }) {
         return (
          <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
           </ThemeProvider>
           </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
         );
       }
