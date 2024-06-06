import { ButtonProps } from "../types";


export default function Button({ onClick, disabled, type, title, className }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} disabled={disabled} type={type} className={className}>
        {title}
      </button>
    </>
  );
}
