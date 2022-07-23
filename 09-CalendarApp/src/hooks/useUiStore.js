import { useDispatch, useSelector } from "react-redux";
import { onCloseModal, onOpenModal } from "../store";

export const useUiStore = () => {
  const { isModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(onOpenModal());
  };

  const closeModal = () => {
    dispatch(onCloseModal());
  };

  return {
    //props
    isModalOpen,
    //methods
    openModal,
    closeModal,
  };
};
