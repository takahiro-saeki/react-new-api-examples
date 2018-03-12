import React, { Component } from 'react';

export default class CalcWidth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    }
  }
  
  componentDidMount() {
    this.resize(true)
  }
  
  resize = (flag = false) => {
    if(flag === true) {
      this.setState({width: window.innerWidth})
      return
    }
    let timer = false;
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => this.setState({width}), 100);
    });
  };
  
  render() {
    return this.props
  }
}