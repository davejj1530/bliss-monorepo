import React from 'react';

declare type Props$2 = {
    color?: string;
    square?: boolean;
    error?: boolean;
    children?: React.ReactNode;
    pill?: boolean;
} | React.HTMLProps<HTMLButtonElement>;
declare const Button: (props: Props$2) => JSX.Element;

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
