import { DefaultTheme } from "styled-components";
export interface Props {
    isMobile: boolean;
    isPushed: boolean;
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntry, LinkLabel };
