import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from './Redux/store'
import { Provider } from 'react-redux'
import { AuthProvider } from './Contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </Provider>
);
