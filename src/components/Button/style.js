import { css } from '@emotion/core';
import { mq } from '../../style';

const defaultStyle = css`
  font-size: 16px;
  background-color: #0288d1;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  ${mq.sm} {
    width: 100%;
  }

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

const secondaryStyle = theme => css`
  color: ${theme.colors.secondary.contrast};
  background-color: ${theme.colors.secondary.default};

  &:hover {
    background-color: ${theme.colors.secondary.darker};
  }

  &:active {
    background-color: ${theme.colors.secondary.lighter};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.secondary.lighter};
  }
`;

export {
  defaultStyle as default,
  secondaryStyle
};
