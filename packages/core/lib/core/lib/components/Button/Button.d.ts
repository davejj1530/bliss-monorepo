import React from "react";
declare type Props = {
    color?: string;
    square?: boolean;
    error?: boolean;
    children?: React.ReactNode;
} | React.HTMLProps<HTMLButtonElement>;
export declare const Button: (props: Props) => JSX.Element;
export {};
