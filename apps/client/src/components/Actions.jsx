import Swal from "sweetalert2";
import { useClientStore, useUiStore } from "../hooks"

export const Actions = ({ values }) => {

    const { openModal } = useUiStore();
    const { startFindClient, startDeletingClient } = useClientStore();

    const onUpdate = (id) => {
        startFindClient(id);
        openModal(false);
    }

    const onDelete = (id) => {
        startFindClient(id);
        Swal.fire({
            title: "¿Estas seguro?",
            text: `Esta acción deshabilitará al cliente`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
        }).then((result) => {
            if (result.isConfirmed) {
                startDeletingClient(id);
                Swal.fire({
                    title: "Eliminado",
                    text: "Cliente eliminado.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <>
            <button onClick={() => onUpdate(values)} className="btn btn-info me-2 mt-2">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => onDelete(values)} className="btn btn-danger mt-2"
            >
                <i className="fas fa-trash"></i>
            </button>
        </>
    )
}
