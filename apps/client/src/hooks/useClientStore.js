import { useDispatch, useSelector } from "react-redux";
import { clientApi } from "../api";

import {
    onAddNewClient,
    onSetSelectedClient,
    onLoadClients,
    onSetLoading,
    onUpdateClient,
    onDeleteClient,
} from "../store";

import Swal from "sweetalert2";

export const useClientStore = () => {
    const { clients, activeClient, isLoadingClients } = useSelector(
        (state) => state.client
    );
    const dispatch = useDispatch();

    /** Set Loading */
    const startSetLoading = () => {
        dispatch(onSetLoading());
    };

    /** Set Active Client */
    const setActiveClient = (client) => {
        dispatch(onSetSelectedClient(client));
    };

    /** Find Client by Id */
    const startFindClient = async (id) => {
        const { data } = await clientApi.get(`/clients/${id}`);
        const { isActive, created_at, updated_at, ...client } = data.data;
        dispatch(onSetSelectedClient(client));
    };

    /** Load Clients */
    const startLoadingClients = async () => {
        const { data } = await clientApi.get("/clients");
        const { clients } = data.data;
        dispatch(onLoadClients(clients));
    };

    const getClientData = (data) => {
        const { message, data: resData } = data;
        const { isActive, created_at, updated_at, ...client } = resData;
        return {
            message,
            client,
        };
    };

    /** Create new Client */
    const startSavingClient = async (clientData) => {
        const { fullName, email, phone, address } = clientData;

        // If clientData contains id, update it
        if (clientData.id) {
            // Update Process

            const { data } = await clientApi.put(`/clients/${clientData.id}`, {
                fullName,
                email,
                phone,
                address,
            });

            const { message, client } = getClientData(data);

            dispatch(onUpdateClient(client));
            return message;
        }

        // Create Process
        const { data } = await clientApi.post("/clients", {
            fullName,
            email,
            phone,
            address,
        });

        const { message, client } = getClientData(data);

        dispatch(onAddNewClient(client));

        return message;
    };

    const startDeletingClient = async (id) => {
        try {
            await clientApi.delete(`/clients/${id}`);
            dispatch(onDeleteClient());
        } catch (error) {
            console.log(error);
            Swal.fire(
                "Error al eliminar",
                "Hubo un error del servidor",
                "error"
            );
        }
    };

    /** Returns */
    return {
        // Properties
        clients,
        activeClient,
        isLoadingClients,
        // Methods
        startSetLoading,
        startSavingClient,
        startLoadingClients,
        setActiveClient,
        startFindClient,
        startDeletingClient,
    };
};
