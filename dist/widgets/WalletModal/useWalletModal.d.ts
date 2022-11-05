import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, marginLeft: string, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModal;
