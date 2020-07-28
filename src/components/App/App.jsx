import React, { useState } from 'react';
import { ThemeProvider, useTheme } from 'emotion-theming';

import style from './style';
import { theme } from '../../style';

import Button, { SecondaryButton, buttonStyle } from '../Button';
import LinkButton, { linkButtonStyle } from '../LinkButton';

const App = ({ onThemeChange }) => {
  const theme = useTheme();
  return (
    <>
      <div css={style(theme)}>
        <Button
          text="Switch theme!"
          onClick={onThemeChange}
        />
        <hr />
        <Button text="But not me!" disabled />
        <hr />
      </div>

      <div css={style(theme)}>
        <SecondaryButton text="Click me too!" />
        <hr />
        <SecondaryButton text="Me neither!" disabled />
        <hr />
      </div>

      <div>
        <LinkButton text="I'm a link!" />
        <hr />
        <LinkButton
          text="I'm a link that looks like a button!"
          css={[linkButtonStyle.linkButtonStyle, buttonStyle.default]}
        />
      </div>
    </>
  );
};

App.propTypes = {};

App.defaultProps = {};

const ThemedApp = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <App onThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
}

export default ThemedApp;
