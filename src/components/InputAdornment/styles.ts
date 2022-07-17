import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const InputAdornmentRootSC = styled.span<{ position: 'start' | 'end'}>`
    display: flex;
    align-items: center;
    white-space: nowrap;
  
    ${(props) => props.position === 'start' && css`
        margin-right: 0.5rem;
        margin-left: 0.75rem;
    `};
  
    ${(props) => props.position === 'end' && css`
        margin-left: 0.5rem;
        margin-right: 0.75rem;
    `};
`;
