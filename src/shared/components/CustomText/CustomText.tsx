import CustomTextStyled from "./CustomTextStyled";
import { CustomTextInterface } from "../../constants/types";

const CustomText = ({ label, size, className, ...rest }: CustomTextInterface) => {
  return (
    <CustomTextStyled className={className} size={size}>
      <span {...rest}>{label}</span>
    </CustomTextStyled>
  );
};
export default CustomText;
