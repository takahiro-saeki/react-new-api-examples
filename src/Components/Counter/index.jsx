import React, { Component, cloneElement } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  render() {
    const { children } = this.props;
    return cloneElement(children, this.state)
  }
}