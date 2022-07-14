import '@emotion/react';

interface Color {
    5: string;
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    100: string;
}

interface CommonColors {
    black: string;
    white: string;
}

interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

export interface Palette {
    common: CommonColors;
    primary: PaletteColor;
    grey: Color;
}

declare module '@emotion/react' {
    export interface Theme {
        palette: Palette;
    }
}
