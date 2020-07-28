import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({ href, text, ...props }) => (
  <a
    href={href}
    { ...props }
  >{text}</a>
);

LinkButton.defaultProps = {
  href: '#'
};

LinkButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default LinkButton;
