import { configureStore } from "@reduxjs/toolkit";

import { clientSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        client: clientSlice.reducer,
    },
});
