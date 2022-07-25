import styled from "styled-components"

type Props = {
    open: boolean
}

export const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 500;

    ${({ open }: Props) => !open && `
        display: none;
    `}
`

export const Content = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 700;
    width: inherit;
    outline: 0;
    width: 400px;
    box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
    background: #fff;
    padding: 24px;
    border-radius: 4px;
    box-sizing: border-box;
`

export const Close = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;

    svg {
        font-size: 1.2rem;
    }
`