import { MouseEventHandler } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomInputStyled from "./CustomInputStyled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string | string;
  placeHolder?: string;
  minLength?: number;
  className?: string;
  buttonLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const CustomInput: React.FC<Props> = ({
  type,
  value,
  placeHolder,
  minLength,
  className,
  buttonLabel,
  onChange,
  onClick,
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
