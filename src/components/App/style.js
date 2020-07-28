import { css } from '@emotion/core';

const defaultStyle = theme => css`
  background-color: ${theme.colors.background};

  button {
    font-size: 24px;
    border-radius: 0;
  }
`;

export {
  defaultStyle as default
};
