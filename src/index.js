import React from "react";
import ReactDOM from "react-dom";
import { ContactsContextProvider } from "./data/contacts-context";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import './assets/fonts/OpenSans-Regular.ttf'

ReactDOM.render(
  <ContactsContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContactsContextProvider>,
  document.getElementById("root")
);