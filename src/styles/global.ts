import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  :root {
    // colors
    --blue-200: #F2F5FA;
    --blue-300: #DAE9F2;
    --blue-400: #2098E3;
    --blue-500: #0C63DF;
    --blue-750: rgba(2, 14, 31, 0.69);;
    --blue-800: rgba(2, 14, 31, 0.85);
    --blue-gradient: linear-gradient(225deg, #2098E3 0%, #0C63DF 100%);
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: var(--blue-200);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--blue-800);
  }
`;
