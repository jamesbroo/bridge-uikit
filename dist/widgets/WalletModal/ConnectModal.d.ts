import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    marginLeft?: string;
    onDismiss?: () => void;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
