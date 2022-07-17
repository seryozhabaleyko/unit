import { css } from '@emotion/react';

import { theme } from '@unit/theming';

export const globalStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
  
    body {
        width: 800px;
        height: 600px;
      
        margin: 0;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0;
        
        color: #1a2027;
        background-color: ${theme.palette.common.white};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`;
