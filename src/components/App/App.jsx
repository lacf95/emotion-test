import React from 'react';

import style from './style';

import Button, { SecondaryButton } from '../Button';

const App = () => (
  <div css={style}>
    <Button text="Click me!" />
    <hr />
    <Button text="But not me!" disabled />
    <hr />
    <SecondaryButton text="Click me too!" />
    <hr />
    <SecondaryButton text="Me neither!" disabled />
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
