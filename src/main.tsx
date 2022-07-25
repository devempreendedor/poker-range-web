import React from "react";
import ReactDOM from "react-dom/client";
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import "./main.scss"

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)