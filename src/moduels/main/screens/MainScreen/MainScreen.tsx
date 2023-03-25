import MainScreenStyled from "./MainScreenStyled";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import RoomsSelect from "../../../chat/components/RoomsSelect/RoomsSelect";
import ExplanationBox from "../../components/ExplanationBox/ExplanationBox";

const MainScreen = () => {
  return (
    <MainScreenStyled>
      <HeaderBar />
      <ExplanationBox />
      <RoomsSelect />
    </MainScreenStyled>
  );
};

export default MainScreen;
