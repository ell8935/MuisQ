import { MouseEventHandler } from "react";
import CustomButtonStyled from "./CustomButtonStyled";

interface CustomButtonInterface {
  label?: string;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ label, onClick, className, disabled = false }: CustomButtonInterface) => {
  return (
    <CustomButtonStyled className={className} disabled={disabled}>
      <button disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </CustomButtonStyled>
  );
};

export default CustomButton;
