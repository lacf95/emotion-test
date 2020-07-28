import { css } from '@emotion/core';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const mq = Object.fromEntries(Object.entries(breakpoints).map(
  ([key, value]) => [key, `@media (max-width: ${value}px)`]
));

const defaultStyle = css`
  button {
    font-size: 24px;
    border-radius: 0;
  }
`;

export {
  defaultStyle as default,
  mq
};
