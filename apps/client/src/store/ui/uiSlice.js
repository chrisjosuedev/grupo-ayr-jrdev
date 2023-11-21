import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isModalOpen: false,
        origin: "",
    },
    reducers: {
        onOpenModal: (state, { payload }) => {
            state.isModalOpen = true;
            state.origin = payload ? "AGREGAR" : "ACTUALIZAR";
        },
        onCloseModal: (state) => {
            state.isModalOpen = false;
        },
    },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;
