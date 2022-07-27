import styled from "styled-components"

type Props = {
    open?: boolean
    submenu?: boolean
}

export const Wrapper = styled.div`
    display: flex;
`

export const Content = styled.div`
    padding: 20px;
`

export const PositionsMenu = styled.div`
    width: 300px;
    background-color: #25313e;
    height: calc(100vh - 50px);
`

export const PositionsMenuItem = styled.div``

export const PositionsMenuItemButton = styled.div`
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    ${({ submenu }: Props) => submenu && `
        background-color: #1b252e !important;
    `}
`

export const PositionMenuItemContent = styled.div`
    height: 0;
    overflow: hidden;
    transition: height ease 0.2s;

    ${({ open }: Props) => open && `
        height: auto;
    `}
`

export const Header = styled.div`
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    
    h3 {
        color: rgba(255,255,255,0.6) !important;
    }
`