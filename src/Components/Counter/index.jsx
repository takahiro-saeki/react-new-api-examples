import React, { Component, cloneElement, Fragment } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
      incrementAsync: this.incrementAsync,
      incrementAsyncTen: this.incrementAsyncTen
    }
  }
  
  increment = () => {
    this.setState(state => ({count: ++state.count}))
  }
  
  decrement = () => {
    this.setState(state => ({count: --state.count}))
  }
  
  incrementAsyncTen = () => {
    setTimeout(
      () => this.setState(state => ({count: state.count + 10})), 
      1000
    )
  }
  
  incrementAsync = () => {
    setTimeout(
      () => this.setState(state => ({count: ++state.count})), 
      1000
    )
  }
  
  render() {
    const { children } = this.props;
    return children({...this.props, ...this.state})
  }
}