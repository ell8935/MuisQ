import CustomModalStyled from "./CustomModalStyled";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setModal } from "../../redux/reducers/modalSlice";

interface Props {
  children: any;
}
function CustomModal({ children }: Props) {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(setModal(false));
  };
  if (!isOpen) return null;

  return (
    <CustomModalStyled isOpen={isOpen}>
      <div className="modalContent">
        <IconButton className="close" onClick={closeModal}>
          <CancelPresentationIcon />
        </IconButton>
        <p>{children}</p>
      </div>
    </CustomModalStyled>
  );
}

export default CustomModal;
