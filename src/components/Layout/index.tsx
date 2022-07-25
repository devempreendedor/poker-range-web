import * as React from 'react';
import { Add, Button, FolderSwitch, Main, Topbar, Wrapper } from './styled';
import { MdArrowDropDown } from "react-icons/md"

interface Props {
    children: React.ReactNode
}

function Layout({ children }: Props) {
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
        </Wrapper>
    )
}

export default Layout