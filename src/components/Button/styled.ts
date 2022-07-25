import styled from "styled-components"

export const Wrapper = styled.div`
    min-width: 120px;
    font-weight: 500;
    border-radius: 2px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: #65bd77;
    border-color: #65bd77;
    display: inline-block;
    padding: 6px 12px;
    color: #fff;

    &:hover {
        color: #fff !important;
        background-color: #53b567;
        border-color: #4bae5f;
    }
`