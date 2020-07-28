import { css } from '@emotion/core';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const theme = {
  light: {
    colors: {
      background: '#ffffff',
      primary: {
        default: '#0288d1',
        contrast: '#ffffff',
        darker: '#005b9f',
        lighter: '#5eb8ff'
      },
      secondary: {
        default: '#616161',
        contrast: '#ffffff',
        darker: '#373737',
        lighter: '#8e8e8e'
      }
    }
  }, dark: {
    colors: {
      background: '#373737',
      primary: {
        default: '#0288d1',
        contrast: '#ffffff',
        darker: '#005b9f',
        lighter: '#5eb8ff'
      },
      secondary: {
        default: '#eeeeee',
        contrast: '#000000',
        darker: '#bcbcbc',
        lighter: '#ffffff'
      }
    }
  }
};

const mq = Object.fromEntries(Object.entries(breakpoints).map(
  ([key, value]) => [key, `@media (max-width: ${value}px)`]
));

export {
  mq,
  theme
};
