import React from 'react';

import { InputAdornment, TextField } from '@unit/components';

export const Home: React.FC = () => (
    <div>
        <TextField
            label="Label"
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        position="start"
                    >
                        start
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment
                        position="end"
                    >
                        end
                    </InputAdornment>
                ),
            }}
        />
    </div>
);
