import * as React from 'react';
import { Add, Button, FolderSwitch, Main, Topbar, Wrapper } from './styled';
import { MdArrowDropDown } from "react-icons/md"
import { CreateFolderModal } from "../../components"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Wrapper>
            <Topbar>
                <FolderSwitch>
                    <Add>+</Add>
                    <Button>
                        <span>Criar Pasta</span>
                        <MdArrowDropDown />
                    </Button>
                </FolderSwitch>
            </Topbar>
            <Main>
                {children}
            </Main>
            <CreateFolderModal open={true} onClose={() => {}} />
        </Wrapper>
    )
}

export default Layout