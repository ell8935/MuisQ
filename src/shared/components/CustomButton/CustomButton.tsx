import React, { MouseEventHandler } from "react";
import CustomButtonStyled from "./CustomButtonStyled";
interface CustomButtonInterface {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  disabled?: boolean;
}
const CustomButton = ({ onClick, label, disabled }: CustomButtonInterface) => {
  return (
    <CustomButtonStyled>
      <button disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </CustomButtonStyled>
  );
};

export default CustomButton;
