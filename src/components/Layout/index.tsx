import * as React from 'react';
import { Add, Button, FoldersContent, FolderSwitch, FolderWrapper, Main, Topbar, Wrapper } from './styled';
import { MdArrowDropDown } from "react-icons/md"
import { CreateFolderModal } from "../../components"
import { useFolder } from '../../context/folder';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface Props {
    children: React.ReactNode
    noFolderSelect?: boolean
}

const Layout = ({ children, noFolderSelect }: Props) => {

    const [openFolder, setOpenFolder] = React.useState(false)
    const [searchParams] = useSearchParams();
    const { setFolderModal, folders  } = useFolder()
    const navigate = useNavigate()
    const params = useParams()

    function getFolderButtonLabel() {
        const id = params.id
        const folder = folders.find((f) => f._id === id)

        if (!folder) return "Criar Pasta"
        return folder.name
    }

    function handleChange(id: string) {
        setOpenFolder(false)
        searchParams.delete('r')
        navigate(`/folders/${id}`,)
    }

    return (
        <Wrapper>
            <Topbar>
                {
                    !noFolderSelect && (
                        <FolderWrapper>
                            <FolderSwitch>
                            <Add onClick={setFolderModal}>+</Add>
                            <Button onClick={() => setOpenFolder(!openFolder)}>
                                <span>{getFolderButtonLabel()}</span>
                                <MdArrowDropDown />
                            </Button>
                        </FolderSwitch>
                        <FoldersContent open={openFolder}>
                            {folders.map((row) => (
                                <div onClick={() => handleChange(row._id)}>
                                    {row.name}
                                </div>
                            ))}
                        </FoldersContent>
                        </FolderWrapper>
                    )
                }
            </Topbar>
            <Main>
                {children}
            </Main>
            <CreateFolderModal />
        </Wrapper>
    )
}

export default Layout