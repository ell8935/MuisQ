import CustomTextStyled from "./CustomTextStyled";
import { CustomTextInterface } from "../../constants/types";

const CustomText = ({ label, size }: CustomTextInterface) => {
  return (
    <CustomTextStyled size={size}>
      <span>{label}</span>
    </CustomTextStyled>
  );
};
export default CustomText;
