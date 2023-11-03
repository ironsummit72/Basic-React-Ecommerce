import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Productview from "./components/Productview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/productview/:id" element={<Productview/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
