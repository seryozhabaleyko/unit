import React from 'react';

import { Input } from '../Input';

import { TextFieldProps } from './types';
import { InputLabelSC, TextFieldRootSC } from './styles';

export const TextField: React.FC<TextFieldProps> = ({
    label, LabelProps, InputProps,
}) => {
    const [focused, setFocused] = React.useState(false);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        InputProps?.onFocus?.(event);

        setFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        InputProps?.onBlur?.(event);

        setFocused(false);
    };

    return (
        <TextFieldRootSC>
            {label && (
                <InputLabelSC focused={focused} {...LabelProps}>
                    {label}
                </InputLabelSC>
            )}
            <Input {...InputProps} onFocus={handleFocus} onBlur={handleBlur} />
        </TextFieldRootSC>
    );
};
