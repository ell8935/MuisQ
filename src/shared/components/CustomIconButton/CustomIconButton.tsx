import CustomIconButtonStyled from "./CustomIconButtonStyled";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface Props extends IconButtonProps {
  children: React.ReactNode;
}

const CustomIconButton = ({ children, color, className, ...rest }: Props) => {
  return (
    <CustomIconButtonStyled color={color} className={className}>
      <IconButton className="iconButton" {...rest}>
        {children}
      </IconButton>
    </CustomIconButtonStyled>
  );
};

export default CustomIconButton;
