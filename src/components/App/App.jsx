import React from 'react';

import style from './style';

import Button, { SecondaryButton, buttonStyle } from '../Button';
import LinkButton, { linkButtonStyle } from '../LinkButton';

const App = () => (
  <>
    <div css={style}>
      <Button text="Click me!" />
      <hr />
      <Button text="But not me!" disabled />
      <hr />
    </div>

    <div>
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

App.propTypes = {};

App.defaultProps = {};

export default App;
