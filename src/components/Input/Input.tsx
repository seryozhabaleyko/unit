import React from 'react';

import { InputProps } from './types';
import { InputRootSC, InputSC } from './styles';

export const Input: React.FC<InputProps> = ({
    startAdornment, endAdornment, onFocus, onBlur, ...inputProps
}) => {
    const [focused, setFocused] = React.useState(false);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(event);

        setFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(event);

        setFocused(false);
    };

    return (
        <InputRootSC focused={focused}>
            {startAdornment}
            <InputSC
                startAdornment={Boolean(startAdornment)}
                endAdornment={Boolean(endAdornment)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...inputProps}
            />
            {endAdornment}
        </InputRootSC>
    );
};
