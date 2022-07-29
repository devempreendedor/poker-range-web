import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #fff;
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`

export const Button = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 20px;

    &:hover {
        color: #65bd77;
    }

    span {
        font-size: 0.8rem;
        margin-left: 5px;
    }
`