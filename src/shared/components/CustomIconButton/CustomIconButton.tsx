import { IconButton, IconButtonProps } from "@mui/material";
import CustomIconButtonStyled from "./CustomIconButtonStyled";

interface Props extends IconButtonProps {
  children: React.ReactNode;
}

const CustomIconButton = ({ children, color, ...rest }: Props) => {
  return (
    <CustomIconButtonStyled color={color}>
      <IconButton className="iconButton" {...rest}>
        {children}
      </IconButton>
    </CustomIconButtonStyled>
  );
};

export default CustomIconButton;
