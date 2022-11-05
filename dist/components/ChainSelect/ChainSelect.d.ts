import React, { SVGAttributes } from "react";
import { SpaceProps } from "styled-system";
import { DefaultTheme } from "styled-components";
export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
    theme?: DefaultTheme;
    spin?: boolean;
}
export interface ChainProps {
    chainId?: number;
    otherChainId?: number;
    handleChangeChain?: (chainId: number) => void;
}
export declare const BinanceIcon: React.FC<SvgProps>;
export declare const ChevronDownIcon: React.FC<SvgProps>;
export declare const EthereumIcon: React.FC<SvgProps>;
export declare const AvalancheIcon: React.FC<SvgProps>;
export declare const FantomIcon: React.FC<SvgProps>;
declare const ChainSelect: ({ chainId, otherChainId, handleChangeChain }: ChainProps) => JSX.Element;
export default ChainSelect;
