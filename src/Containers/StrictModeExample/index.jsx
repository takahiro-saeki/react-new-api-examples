import React, { Component, StrictMode } from 'react';
import UnsafeLifecycle from '../UnsafeLifecycle';

export default class StrictModeExample extends Component {
  render() {
    return (
      <StrictMode>
        <UnsafeLifecycle />
      </StrictMode>
    )
  }
}