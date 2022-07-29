import styled from "styled-components"

export const Bar = styled.div`
    width: 400px;
    background-color: #fff;
    padding: 20px;
`

export const Link = styled.p`
    font-size: 0.9rem;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
    
    span {
        margin-left: 5px;
    }
`