import React, { Component } from 'react';
import MainListArea from './MainListArea';

export default class TodoExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>Todo Example</header>
        <MainListArea />
      </div>
    )
  }
}
