import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navprovider from "./Components/context/NavProvider";
ReactDOM.render(
    <Navprovider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Navprovider>

,document.getElementById("root"))
