import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
}
