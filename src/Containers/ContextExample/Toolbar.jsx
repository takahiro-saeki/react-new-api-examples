import React from 'react';
import ThemedButton from './themed-button';

const Toolbar = ({ changeTheme }) => (
  <ThemedButton onClick={changeTheme}>
    Change Theme
  </ThemedButton>
)

export default Toolbar;
