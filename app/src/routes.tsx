import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/login-page/Login";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
        </BrowserRouter>
    )
}

export default Routes;