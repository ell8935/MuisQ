import { IconButton } from "@mui/material";
import CustomModalStyled from "./CustomModalStyled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setModal } from "../../redux/reducers/modalSlice";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CustomIconButton from "../CustomIconButton/CustomIconButton";

interface Props {
  children: any;
}

const CustomModal = ({ children }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(setModal(false));
  };

  if (!isOpen) return null;

  return (
    <CustomModalStyled isOpen={isOpen}>
      <div className="modalContent">
        <CustomIconButton className="close" onClick={closeModal}>
          <CancelPresentationIcon />
        </CustomIconButton>
        <p>{children}</p>
      </div>
    </CustomModalStyled>
  );
};

export default CustomModal;
