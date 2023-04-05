import { MouseEventHandler } from "react";
import CustomInputStyled from "./CustomInputStyled";
import CustomButton from "../CustomButton/CustomButton";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  minLength?: number;
  className?: string;
  placeHolder?: string;
  buttonLabel?: string;
  onClick?: () => void;
  value?: string | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({
  type,
  value,
  onClick,
  onChange,
  minLength,
  className,
  buttonLabel,
  placeHolder,
  ...rest
}: Props) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClick?.();
    }
  };
  return (
    <CustomInputStyled>
      <input
        className={className ? className : "default"}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        minLength={minLength}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      {buttonLabel ? (
        <div className="inputButton">
          <CustomButton
            label={buttonLabel}
            onClick={onClick as MouseEventHandler<HTMLButtonElement>}
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
