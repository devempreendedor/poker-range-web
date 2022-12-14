import styled from "styled-components"

export const Combo = styled.div`
    background: #fff;
    color: #666;
    font-size: 12px;
    border-radius: 4px;
    display: inline-block;
    font-size: 1rem;
    width: 33px;
    height: 33px;
    margin: 2px;
    overflow: hidden;
    cursor: pointer;

    ${({ color }) => color && `
        background-color: ${color};
        color: #fff;
    `}

    @media(min-width: 1400px) {
        width: 40px;
        height: 40px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: "column";
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        opacity: 0.9;
    }

    ${({ color }) => color && `
        background: ${color};
        color: #fff;
    `}
`