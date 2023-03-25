import CustomInputStyled from "./CustomInputStyled";

interface Props {
  label?: string;
  type?: string;
  value?: string;
  placeHolder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput = ({ label, type, value, onChange, placeHolder }: Props) => {
  return (
    <CustomInputStyled>
      <span>
        <input
          className="slide-up"
          id="card"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
        {label ? <label htmlFor="card">{label}</label> : ""}
      </span>
    </CustomInputStyled>
  );
};

export default CustomInput;
