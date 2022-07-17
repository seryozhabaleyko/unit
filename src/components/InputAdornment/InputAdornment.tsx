import React from 'react';

import { InputAdornmentProps } from './types';
import { InputAdornmentRootSC } from './styles';

export const InputAdornment: React.FC<React.PropsWithChildren<InputAdornmentProps>> = ({
    position,
    children,
}) => (
    <InputAdornmentRootSC position={position}>{children}</InputAdornmentRootSC>
);
