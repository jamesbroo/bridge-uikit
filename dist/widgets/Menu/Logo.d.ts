import React from "react";
interface Props {
    isMobile: boolean;
    isPushed: boolean;
    isHover: boolean;
    isMenu?: boolean;
    isDark: boolean;
    togglePush: () => void;
    href: string;
}
declare const Logo: React.FC<Props>;
export default Logo;
