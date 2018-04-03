import React, { Component } from 'react';

export default class UnsafeChild extends Component {
  static defaultProps = {
    title: 'default'
  }
  
  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  
  render() {
    return (
      <div>child title is: {this.props.title}</div>
    )
  }
}