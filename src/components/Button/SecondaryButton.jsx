import React from 'react';

import Button from './Button';
import { secondaryButtonStyle } from './style';

const SecondaryButton = props => (
  <Button css={secondaryButtonStyle} { ...props } />
);

export default SecondaryButton;
