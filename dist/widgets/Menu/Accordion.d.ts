import React from "react";
import { PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    isMobile: boolean;
    isPushed: boolean;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    isOpen?: boolean;
    onClick: () => void;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
