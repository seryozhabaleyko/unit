import React from 'react';

import { InputLabel } from '../InputLabel';
import { Input } from '../Input';

import { TextFieldProps } from './types';

export const TextField: React.FC<TextFieldProps> = ({ label, LabelProps, ...InputProps }) => (
    <div>
        {label && (<InputLabel {...LabelProps}>{label}</InputLabel>)}
        <Input {...InputProps} />
    </div>
);
