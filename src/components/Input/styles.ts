import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const InputRootSC = styled.div<{ focused: boolean }>`
    display: flex;
    align-items: center;
  
    background-color: ${(props) => props.theme.palette.common.white};
    border: 1px solid ${(props) => props.theme.palette.grey[30]};
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out;
  
    ${(props) => props.focused && css`
        border-color: ${props.theme.palette.primary.main};
    `};
`;

export const InputSC = styled.input<{
    startAdornment: boolean;
    endAdornment: boolean;
}>`
    display: block;
    width: 100%;
    appearance: none;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
  
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: ${(props) => (props.startAdornment ? '0' : '0.75rem')};
    padding-right: ${(props) => (props.endAdornment ? '0' : '0.75rem')};
    color: ${(props) => props.theme.palette.grey[100]};
    background-clip: padding-box;
    background-color: transparent;
    border: none;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out;

    &:focus {
        outline: 0;
    }
  
    &::placeholder {
        color: ${(props) => props.theme.palette.grey[50]};
        opacity: 1;
    }
`;
