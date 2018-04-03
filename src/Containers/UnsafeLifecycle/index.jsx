import React, { Component } from 'react';
import { isEqual } from 'lodash';
import UnsafeChild from './UnsafeChild';

export default class UnsafeLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: 'default'
    }
  }
  
  componentDidMount() {
    console.log('Mounted!')
  }
  
  UNSAFE_componentWillMount() {
    console.log('unsafe! componentWillMount')
  }
  
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  
  handleChange = () => {
    this.setState({title: 'UnsafeLifecycle'})
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if(isEqual(nextState, this.state)) {
      console.log('same!', {nextState, state: this.state})
      return false
    }
    return true
  }
  
  render() {
    return (
      <div>
        <div onClick={this.handleChange}>{this.state.title}</div>
        <div>
          <UnsafeChild title={this.state.title}/>
        </div>
      </div>
    )
  }
}