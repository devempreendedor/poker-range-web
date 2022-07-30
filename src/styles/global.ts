import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f0f3f4;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        overflow-x: hidden;
        line-height: 1.5;
        color: #58666e;
    }

    h1, h2, h3, h4 {
        font-weight: 500;
        line-height: 1.2;
        color: #0E1133;
    }

    h4 {
        font-size: 22px;
    }
`