import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        align-items: center;
        background: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryDark}
        display: flex;
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }
`
