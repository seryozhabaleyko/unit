import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { InputLabel } from '@unit/components';

export const TextFieldRootSC = styled.div``;

export const InputLabelSC = styled(InputLabel)<{ focused: boolean }>`
    transition: color 0.15s ease-in-out;
    
    ${(props) => props.focused && css`
        color: ${props.theme.palette.primary.main};
    `};
`;
