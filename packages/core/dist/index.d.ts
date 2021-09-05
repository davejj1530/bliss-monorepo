import React from 'react';

declare type Theme = {
    colors: Pallette;
    elevation?: Elevation;
};
declare type Pallette = {
    primary: PalleteWeights;
    secondary: PalleteWeights;
    tertiary: PalleteWeights;
};
declare type PalleteWeights = {
    dark: string;
    main: string;
    light: string;
};
declare type Elevation = {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
};

declare type ButtonProps = {
    color?: string;
    square?: boolean;
    children?: React.ReactNode;
    pill?: boolean;
    outlined?: boolean;
    pallette?: "dark" | "light" | "main";
    themeColor?: "primary" | "secondary" | "tertiary";
    liftOnHover?: boolean;
    elevation?: number;
    theme?: Theme;
} & React.HTMLProps<HTMLButtonElement>;
declare const Button: ({ type, elevation, ...props }: ButtonProps) => JSX.Element;

declare const Calendar: () => JSX.Element;

declare type Props$1 = {
    borded?: boolean;
    children?: React.ReactNode;
} | React.HTMLProps<HTMLDivElement>;
declare const Section: (props: Props$1) => JSX.Element;

declare type Props = {
    vertical?: string;
    horizontal?: string;
    children?: React.ReactNode;
} | React.HTMLProps<HTMLDivElement>;
declare const Space: (props: Props) => JSX.Element;

declare type BlissStylePropTypes = {
    pt?: string | number;
    pb?: string | number;
    pl?: string | number;
    pr?: string | number;
    mt?: string | number;
    mb?: string | number;
    ml?: string | number;
    mr?: string | number;
    py?: string | number;
    px?: string | number;
    my?: string | number;
    mx?: string | number;
    p?: string | number;
    m?: string | number;
    bg?: string;
};

declare type BoxProps = {
    children?: React.ReactNode;
} & React.CSSProperties & BlissStylePropTypes & React.HTMLProps<HTMLDivElement>;
declare const Box: (props: BoxProps) => JSX.Element;

export { Box, Button, Calendar, Section, Space };
