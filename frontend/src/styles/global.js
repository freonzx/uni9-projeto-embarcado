import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap';

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: rgb(113,89,193);
        background: linear-gradient(45deg, rgba(113,89,193,1) 0%, rgba(80,7,88,1) 100%);
        -webkit-font-smoothing: antialised !important;
    }

    img {
        height: 125px;
    }

    .center {
        text-align: center;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Roboto, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`
