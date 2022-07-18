import React from 'react';

import { ButtonBaseProps } from './types';
import { ButtonBaseSC } from './styles';

export const ButtonBase: React.FC<React.PropsWithChildren<ButtonBaseProps>> = ({
    children,
    ...other
}) => (
    <ButtonBaseSC {...other}>{children}</ButtonBaseSC>
);
