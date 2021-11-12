import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../Pages/App";
import Pdf from "../Pages/Pdf";

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/pdf" component={Pdf}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
