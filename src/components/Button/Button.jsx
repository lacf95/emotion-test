import React from 'react';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import style from './style';

const Button = ({ text, type, onClick, ...props }) => {
  const theme = useTheme();

  return (
    <button
      type={type}
      css={style}
      onClick={onClick}
      { ...props }
    >{ text }</button>
  );
};


Button.defaultProps = {
  type: 'button',
  onClick: () => {}
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
