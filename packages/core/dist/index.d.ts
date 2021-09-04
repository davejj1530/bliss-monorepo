import React from 'react';

declare type ButtonProps = {
    color?: string;
    square?: boolean;
    children?: React.ReactNode;
    pill?: boolean;
    outlined?: boolean;
    pallette?: "dark" | "light" | "main";
    type?: "primary" | "success" | "error";
    liftOnHover?: boolean;
    elevation?: number;
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

export { Button, Calendar, Section, Space };
