import * as React from 'react';
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/Home"
import Folders from "../pages/Folders"
import Folder from "../pages/Folder"
import Viewer from '../pages/Viewer';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/folders' element={<Folders />} />
            <Route path='/folders/:id' element={<Folder />} />
            <Route path='/viewer/:id' element={<Viewer />} />
        </Routes>
    )
}

export default Router;