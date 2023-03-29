import CustomInputStyled from "./CustomInputStyled";

interface Props {
  label?: string;
  type?: string;
  value?: string;
  placeHolder?: string;
  minLength?: number;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput = ({
  label,
  type,
  value,
  onChange,
  placeHolder,
  minLength,
  className,
}: Props) => {
  return (
    <CustomInputStyled>
      <span>
        <input
          className={className ? className : "slide-up"}
          id="card"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          minLength={minLength}
        />
        {label ? <label htmlFor="card">{label}</label> : ""}
      </span>
    </CustomInputStyled>
  );
};

export default CustomInput;
