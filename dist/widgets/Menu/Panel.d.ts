import React from "react";
import { NavProps, PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps, NavProps {
    className?: string;
    showMenu: boolean;
    isMobile: boolean;
}
declare const Panel: React.FC<Props>;
export default Panel;
