import MainScreenStyled from "./MainScreenStyled";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import RoomsSelect from "../../../chat/components/RoomsSelect/RoomsSelect";
import ExplanationBox from "../../components/ExplanationBox/ExplanationBox";
import LogoutButton from "../../../auth/components/LogoutButton/LogoutButton";

const MainScreen = () => {
  return (
    <MainScreenStyled>
      <div className="logo">logo</div>
      <div className="middleBox"></div>
      <div className="logout">
        <LogoutButton />
      </div>
      {/* <div className="header">
        <HeaderBar />
      </div> */}
      <div className="explanationBox">
        <ExplanationBox />
      </div>
      <div className="functionalBox">
        <RoomsSelect />
      </div>
    </MainScreenStyled>
  );
};

export default MainScreen;
