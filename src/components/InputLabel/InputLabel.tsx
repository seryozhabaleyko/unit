import React from 'react';

import { InputLabelProps } from './types';
import { InputLabelSC } from './styles';

export const InputLabel: React.FC<InputLabelProps> = (props) => (
    <InputLabelSC {...props} />
);
