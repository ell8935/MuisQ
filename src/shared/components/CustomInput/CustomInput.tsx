import { MouseEventHandler } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomInputStyled from "./CustomInputStyled";

interface Props {
  type?: string;
  value?: string;
  placeHolder?: string;
  minLength?: number;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttonLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const CustomInput = ({
  type,
  value,
  onChange,
  placeHolder,
  minLength,
  className,
  buttonLabel,
  onClick,
}: Props) => {
  return (
    <CustomInputStyled>
      <input
        className={className ? className : "default"}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        minLength={minLength}
      />
      {buttonLabel ? (
        <div className="inputButton">
          <CustomButton
            label={buttonLabel}
            onClick={onClick}
            disabled={!value}
          />
        </div>
      ) : (
        ""
      )}
    </CustomInputStyled>
  );
};

export default CustomInput;
