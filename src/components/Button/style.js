import { css } from '@emotion/core';

const defaultStyle = css`
  font-size: 16px;
  background-color: #0288d1;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #005b9f;
  }

  &:active {
    background-color: #0288d1;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #5eb8ff;
  }
`;

const secondaryStyle = css`
  background-color: #616161;

  &:hover {
    background-color: #373737;
  }

  &:active {
    background-color: #616161;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #8e8e8e;
  }
`;

export {
  defaultStyle as default,
  secondaryStyle
};
