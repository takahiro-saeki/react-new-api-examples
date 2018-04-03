import React, { Component } from 'react';
import { v4 } from 'uuid';
import withTheme from '../../utils/withTheme';

const mapStateToProps = state => {
  return {}
}

@withTheme(mapStateToProps)
export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  
  handleChange = e => {
    this.setState({value: e.target.value})
  }
  
  onSubmit = e => {
    const { add } = this.props.store;
    const { value } = this.state;
    
    if (e.which === 13) {
      add({id: v4(), title: value})
      this.setState({value: ''})
    }
  }
  
  render() {
    const { value } = this.state;
    return (
      <input 
        onChange={this.handleChange}
        onKeyDown={this.onSubmit}
        value={value} 
      />
    )
  }
}

