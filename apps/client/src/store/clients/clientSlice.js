import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        clients: [],
        activeClient: null,
        isLoadingClients: true,
    },
    reducers: {
        onAddNewClient: (state, { payload }) => {
            state.clients.push(payload);
            state.activeClient = null;
        },
        onUpdateClient: (state, { payload }) => {
            state.clients = state.clients.map((client) => {
                if (client.id === payload.id) return payload;
                return client;
            });
            state.activeClient = null;
        },
        onSetSelectedClient: (state, { payload }) => {
            state.activeClient = payload;
        },
        onLoadClients: (state, { payload }) => {
            payload.forEach((client) => {
                const exists = state.clients.some(
                    (clientInStore) => clientInStore.id === client.id
                );
                if (!exists) state.clients.push(client);
            });
            state.isLoadingClients = false;
        },
        onSetLoading: (state) => {
            state.isLoadingClients = false;
        },
        onDeleteClient: (state) => {
            state.clients = state.clients.filter((client) => {
                return client.id !== state.activeClient.id;
            });
            state.activeClient = null;
        },
    },
});

export const {
    onAddNewClient,
    onUpdateClient,
    onSetSelectedClient,
    onLoadClients,
    onSetLoading,
    onDeleteClient,
} = clientSlice.actions;
