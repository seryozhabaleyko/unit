import React from 'react';

import { Global } from '@emotion/react';

import { globalStyles } from './styles';

export const CssBaseline: React.FC = () => (
    <Global styles={globalStyles} />
);
