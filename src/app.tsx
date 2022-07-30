import * as React from 'react';
import Global from './styles/global';
import Routes from "./routes"
import { FolderProvider } from './context/folder';
import { RangeProvider } from './context/ranges';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <FolderProvider>
            <RangeProvider>
                <Routes />
                <Global />
                <Toaster />
            </RangeProvider>
        </FolderProvider>
    )
}

export default App