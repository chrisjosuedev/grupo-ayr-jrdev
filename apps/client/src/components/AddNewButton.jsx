import { useClientStore, useUiStore } from "../hooks"

export const AddNewButton = () => {

    const { openModal } = useUiStore();
    const { setActiveClient } = useClientStore();

    const onNewClient = () => {
        setActiveClient({
            fullName: "",
            email: "",
            phone: "",
            address: ""
        });
        openModal(true);
    }

    return (
        <button
            className="btn btn-success"
            onClick={onNewClient}
        >
            <i className="fas fa-plus-circle"></i>
            &nbsp; Nuevo
        </button>
    )
}
