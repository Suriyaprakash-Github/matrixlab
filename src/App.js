import "./App.css";
import Dashboard from "./components/Dashboard";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi"; //
import { mainnet, polygon, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
// import Trial from "./trial";
const { chains, provider } = configureChains(
  [mainnet, polygon, bscTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div>
            <Dashboard />
            {/* <Trial /> */}
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
