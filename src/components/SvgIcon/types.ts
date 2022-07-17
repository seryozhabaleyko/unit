import React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    fontSize?: 'inherit' | 'small' | 'medium' | 'large';
}
