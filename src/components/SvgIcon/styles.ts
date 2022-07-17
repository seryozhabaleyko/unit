import styled from '@emotion/styled';

import { SvgIconProps } from '@unit/components';

const fontSizeMap = {
    inherit: 'inherit',
    small: '1.25rem',
    medium: '1.5rem',
    large: '1.75rem',
};

export const SvgRootSC = styled.svg<{ fontSize: Required<SvgIconProps>['fontSize'] }>`
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    fill: currentColor;
    user-select: none;
    font-size: ${(props) => fontSizeMap[props.fontSize]};
    transition: fill 0.15s ease-in-out;
`;
