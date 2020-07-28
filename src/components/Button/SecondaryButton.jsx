import React from 'react';

import Button from './Button';
import { secondaryStyle } from './style';

const SecondaryButton = props => (
  <Button css={secondaryStyle} { ...props } />
);

export default SecondaryButton;
