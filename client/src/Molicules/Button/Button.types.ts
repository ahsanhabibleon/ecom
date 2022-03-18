export type ButtonTypes = "button" | "submit" | "reset" | undefined
export interface ButtonProps { 
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any | void;
    type?: ButtonTypes;
    primary?: boolean;
    secondary?: boolean;
    disabled?: boolean;
}