declare const requestChainChange: (chainId: number, setChain: (chain: number) => void) => Promise<boolean>;
export default requestChainChange;
