import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "react-use-cart";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/grid.css";
import "./assets/login.css";
import HomePage from "./pages/HomePage";
import Routing from "./router/Routing";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <CartProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </CartProvider>
    </React.StrictMode>
  </Provider>
);
