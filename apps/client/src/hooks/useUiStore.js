import { useDispatch, useSelector } from "react-redux";
import { onCloseModal, onOpenModal } from "../store";

export const useUiStore = () => {
    const dispatch = useDispatch();
    const { isModalOpen, origin } = useSelector((state) => state.ui);

    /** Open Modal */
    const openModal = (flag) => {
        dispatch(onOpenModal(flag));
    };

    /** Close Modal */
    const closeModal = () => {
        dispatch(onCloseModal());
    };

    return {
        // Properties
        isModalOpen,
        origin,
        // Methods
        openModal,
        closeModal,
    };
};
