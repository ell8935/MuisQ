import CustomModalStyled from "./CustomModalStyled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import CustomIconButton from "../CustomIconButton/CustomIconButton";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { toggleModal } from "../../redux/reducers/modalSlice";

const CustomModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen, modalData } = useSelector((state: RootState) => state.modal);
  console.log(modalData);

  const closeModal = () => {
    dispatch(toggleModal(null));
  };

  if (!isOpen) return null;

  return (
    <CustomModalStyled isOpen={isOpen}>
      <div className="modalContent">
        <CustomIconButton className="close" onClick={closeModal}>
          <CancelPresentationIcon />
        </CustomIconButton>
        {modalData}
      </div>
    </CustomModalStyled>
  );
};

export default CustomModal;
