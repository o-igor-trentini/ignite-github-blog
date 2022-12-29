import { createGlobalStyle } from 'styled-components';

export const MainStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    }
    
    body {
      background-color: ${({ theme }) => theme.baseBackground};
      color: ${({ theme }) => theme.white};
      -webkit-font-smoothing: antialiased;
    }
    
    body, input, button {
      font: 400 1rem Nunito, sans-serif;
      line-height: 1.6;
    }
`;
