import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        backround: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    `