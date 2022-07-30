import * as React from 'react';
import { Folder } from '../types/folder';
import api from '../config/api';
import { Response } from '../types/api';

type Props = {
    children: React.ReactNode
}

interface FolderResponse extends Response {
    data: Folder
}

export type FolderBody = {
    name: string
    typeGame: string
    format: string
}

type TypeRangeContext = {
    listFolders(): void
    folders: Folder[]
    createFolder(body: FolderBody): Promise<FolderResponse>
    folderModal: boolean
    setFolderModal(): void
    folderLoading: boolean
    setFolderLoading(): void
}

const FolderContext = React.createContext({} as TypeRangeContext)

export const FolderProvider = ({ children }: Props) => {
    const [folderLoading, setFolderLoading] = React.useState(false)
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

    async function createFolder(body: FolderBody): Promise<FolderResponse> {
        setFolderLoading(true)
        const response = await api.post(`/folders`, body)
        if (response.status === 201) {
            listFolders()
        }
        setFolderLoading(false)
        return response
    }

    return (
        <FolderContext.Provider value={{
            folders,
            folderModal,
            setFolderModal: () => setFolderModal(!folderModal),
            createFolder,
            listFolders,
            folderLoading,
            setFolderLoading: () => setFolderLoading(!folderLoading)
        }}>
            {children}
        </FolderContext.Provider>
    )
}

export function useFolder() {
    return React.useContext(FolderContext)
}

export default FolderContext