import React from 'react';

import { SvgIconProps } from './types';
import { SvgRootSC } from './styles';

export const SvgIcon: React.FC<SvgIconProps> = ({
    fontSize = 'medium',
    children,
    ...other
}) => (
    <SvgRootSC fontSize={fontSize} {...other}>{children}</SvgRootSC>
);
