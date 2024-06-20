import { http, createConfig } from "wagmi";
import { base, mainnet, optimism, bscTestnet } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "b57492a3490d9766ce9d2e3f30f6a755";

export const config = createConfig({
  chains: [mainnet, base, optimism, bscTestnet],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
