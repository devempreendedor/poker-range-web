import styled from "styled-components"

export const Card = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);

        
    h1 {
        font-size: 1.1rem;
        font-weight: 400;
        color: #222;padding: 12px 0;
        cursor: pointer;
    }
`

export const CardInfo = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-right: 10px;
        font-size: 0.8rem;
    }
`