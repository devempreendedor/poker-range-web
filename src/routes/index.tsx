import * as React from 'react';
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/Home"
import Folders from "../pages/Folders"
import Folder from "../pages/Folder"

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/folders' element={<Folders />} />
            <Route path='/folders/:id' element={<Folder />} />
        </Routes>
    )
}

export default Router;