import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 30px 15px;
    background: #fff;
    border: 1px solid #e8edf4;
    border-radius: 5px;
    padding: 35px;
    cursor: pointer;
    transition: all 0.2s linear;
    margin-bottom: 30px;

    &:hover {
        background: #fff;
        box-shadow: 6px 10px 50px rgba(25, 28, 104, 0.15);
    }

    h4 {
        margin-top: 0;
        margin-bottom: 2px;
    }
`