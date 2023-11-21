import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import { ClientApp } from "./ClientApp.jsx";
import { store } from "./store/store.js";

import "./styles/bootstrap.min.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ClientApp />
    </Provider>
  </React.StrictMode>,
)
