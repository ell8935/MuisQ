import HeaderBarStyled from "./HeaderBarStyled";
import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";

const HeaderBar = () => {
  return (
    <HeaderBarStyled>
      <div className="logo">logo</div>
      <div className="middleBox"></div>
      <div className="logout">
        <LogoutButton />
      </div>
    </HeaderBarStyled>
  );
};

export default HeaderBar;
