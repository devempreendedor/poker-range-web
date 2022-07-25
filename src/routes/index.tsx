import * as React from 'react';
import { Route, Switch } from "react-router-dom";

//Pages
import Home from "../pages/Home"
import Folders from "../pages/Folders"
import Folder from "../pages/Folder"

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/folders">
                <Folders />
            </Route>
            <Route path="/folders/:id">
                <Folder />
            </Route>
        </Switch>
    )
}

export default Router;