import { css } from '@emotion/core';

const defaultStyle = css`
  color: #0288d1;

  &:hover {
    color: #005b9f;
  }

  &:active {
    color: #0288d1;
  }
`;

const linkButtonStyle = css`
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
`;

export {
  defaultStyle as default,
  linkButtonStyle
};
