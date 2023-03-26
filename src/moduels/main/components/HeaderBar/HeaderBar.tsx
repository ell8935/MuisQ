import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";

const HeaderBar = () => {
  return (
    <div>
      <div className="logo">logo</div>
      <div className="middleBox"></div>
      <div className="logout">
        <LogoutButton />
      </div>
    </div>
  );
};

export default HeaderBar;
