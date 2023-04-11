import { MouseEventHandler } from "react";
import CustomInputStyled from "./CustomInputStyled";
import CustomButton from "../CustomButton/CustomButton";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  buttonLabel?: string;
  onClick?: () => void;
  value?: string | string;
}

const CustomInput: React.FC<Props> = ({ onClick, className, buttonLabel, value, ...rest }: Props) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClick?.();
    }
  };
  return (
    <CustomInputStyled>
      <input className={`default ${className}`} onKeyDown={handleKeyDown} value={value} {...rest} />
      {buttonLabel && (
        <div className="inputButton">
          <CustomButton label={buttonLabel} onClick={onClick} disabled={!value} />
        </div>
      )}
    </CustomInputStyled>
  );
};

export default CustomInput;
