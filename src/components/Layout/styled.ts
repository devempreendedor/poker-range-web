import styled from "styled-components"

type Props = {
    open?: boolean;
}

export const Wrapper = styled.div``

export const Topbar = styled.div`
    background-color: #25313e;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
`

export const Main = styled.div``

export const FolderSwitch = styled.div`
    display: flex;
    align-items: center;
`

export const Add = styled.div`
    height: 30px;
    width: 30px;
    background-color: #65bd77;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Button = styled.div`
    background-color: #1b252e;
    height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 12px;
    justify-content: space-between;
    min-width: 120px;
    cursor: pointer;
`

export const FolderWrapper = styled.div`
    position: relative;    
`

export const FoldersContent = styled.div`
    position: absolute;
    background-color: #1b252e;
    width: 100%;
    color: rgba(255,255,255,0.9);
    font-weight: 400;
    font-size: 0.8rem;
    display: none;

    ${({ open }: Props) => open && `
        display: flex;
        flex-direction: column;
    `}

    div {
        padding: 12px;
        cursor: pointer;
        
        &:hover {
            opacity: 0.9;
        }
    }
`