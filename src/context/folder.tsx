import * as React from 'react';
import { Folder } from '../types/folder';
import api from '../config/api';

type Props = {
    children: React.ReactNode
}

export type FolderBody = {
    name: string
    typeGames: string
    format: string
}

type TypeRangeContext = {
    listFolders(): void
    folders: Folder[]
    createFolder(body: FolderBody): void
    folderModal: boolean
    setFolderModal(): void
}

const FolderContext = React.createContext({} as TypeRangeContext)

export const FolderProvider = ({ children }: Props) => {

    const [folderModal, setFolderModal] = React.useState(false)
    const [folders, setFolders] = React.useState([])

    React.useEffect(() => {
        const existFolder = localStorage.getItem('folders')
        setFolders(JSON.parse(existFolder))
    }, [])

    async function listFolders() {
        const response = await api.get(`/folders`)
        localStorage.setItem('folders', JSON.stringify(response.data))
        setFolders(response.data)
    }

    async function createFolder(body: FolderBody) {
        const response = await api.post(`/folders`, body)
        if (response.status === 201) {
            listFolders()
        }
    }

    return (
        <FolderContext.Provider value={{
            folders,
            folderModal,
            setFolderModal: () => setFolderModal(!folderModal),
            createFolder,
            listFolders
        }}>
            {children}
        </FolderContext.Provider>
    )
}

export function useFolder() {
    return React.useContext(FolderContext)
}

export default FolderContext