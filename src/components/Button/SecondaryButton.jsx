import React from 'react';
import { useTheme } from 'emotion-theming';

import Button from './Button';
import { secondaryStyle } from './style';

const SecondaryButton = props => {
  const theme = useTheme();
  return (
    <Button css={secondaryStyle(theme)} { ...props } />
  );
};

export default SecondaryButton;
