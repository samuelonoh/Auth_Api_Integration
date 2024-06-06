export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type: "button" | "submit" | "reset";
    title: string;
    className?: string;
}