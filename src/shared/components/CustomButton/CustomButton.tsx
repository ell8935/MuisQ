import { MouseEventHandler } from "react";
import CustomButtonStyled from "./CustomButtonStyled";

interface CustomButtonInterface {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  disabled?: boolean;
  className?: string;
}
const CustomButton = ({
  onClick,
  label,
  disabled = false,
  className,
}: CustomButtonInterface) => {
  return (
    <CustomButtonStyled className={className} disabled={disabled}>
      <button disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </CustomButtonStyled>
  );
};

export default CustomButton;
