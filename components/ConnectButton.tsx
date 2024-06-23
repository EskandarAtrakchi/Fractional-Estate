import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export interface ConnectButtonProps {
  variant: 'primary' | 'secondary'; 
  size: 'sm' | 'md' | 'lg'; 
}

export const YourApp = () => {
  return (
    <ConnectButton className={`btn-${variant} btn-${size}`} >
      Connect Wallet
    </ConnectButton>
  );
};
