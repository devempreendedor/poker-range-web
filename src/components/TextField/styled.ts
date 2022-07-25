import styled from "styled-components"


export const InputStyle = styled.input`
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    outline: none;

    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;

    &:focus {
        border-color: #66afe9;
    }

`


export const Label = styled.div`
    margin-bottom: 5px;
`