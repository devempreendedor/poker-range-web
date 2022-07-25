import styled from "styled-components"

type Props = {
    open: boolean
}

export const Wrapper = styled.div`
    position: relative;
`

export const Label = styled.div`
    margin-bottom: 5px;
`

export const Select = styled.div`
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 0.9rem;
        color: #555;
    }

    ${({ open }: Props) => open && `
        border-color: #66afe9;
    `}
`

export const Options = styled.div`
    position: absolute;
    z-index: 999;
    background-color: #ffffff;
    width: 100%;
    border-radius: 4px;
    margin-top: 4px;
    border: 1px solid #EAEAEA;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: none;

    ${({ open }: Props) => open && `
        display: flex;
        flex-direction: column;
    `}

`

export const Option = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
        background-color: #F4F4F4;

    }
`