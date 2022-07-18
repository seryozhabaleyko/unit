import React from 'react';

import { DisplayGrid } from './styles';

import { ButtonBase, InputAdornment, TextField } from '@unit/components';
import { Swap } from '@unit/icons';

export const Home: React.FC = () => (
    <DisplayGrid>
        <TextField
            InputProps={{
                type: 'number',
                endAdornment: (
                    <InputAdornment
                        position="end"
                    >
                        px
                    </InputAdornment>
                ),
            }}
        />
        <ButtonBase>
            <Swap />
        </ButtonBase>
        <TextField
            InputProps={{
                type: 'number',
                endAdornment: (
                    <InputAdornment
                        position="end"
                    >
                        rem
                    </InputAdornment>
                ),
            }}
        />
    </DisplayGrid>
);
