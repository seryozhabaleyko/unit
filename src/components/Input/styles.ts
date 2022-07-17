import styled from '@emotion/styled';

export const InputSC = styled.input`
    display: block;
    width: 100%;
    appearance: none;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    color: ${(props) => props.theme.palette.grey[100]};
    background-clip: padding-box;
    background-color: ${(props) => props.theme.palette.common.white};
    border: 1px solid ${(props) => props.theme.palette.grey[30]};
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out;

    &:focus {
        border-color: ${(props) => props.theme.palette.primary.main};
        outline: 0;
    }
  
    &::placeholder {
        color: ${(props) => props.theme.palette.grey[50]};
        opacity: 1;
    }
`;
