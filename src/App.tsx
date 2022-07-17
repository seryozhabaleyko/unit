import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { CssBaseline } from '@unit/components';
import { Home } from '@unit/modules';
import { theme } from '@unit/theming';

export const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
    </ThemeProvider>
);
