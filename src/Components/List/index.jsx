import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false
    }
  }
  
  _fetch = async () => {
    const res = await fetch(this.props.url);
    const json = await res.json();
    
    await this.setState({
      list: json,
      isLoading: false,
    });
  }
  
  componentDidMount() {
    this.setState({ isLoading: true }, this._fetch);
  }
  
  render() {
    return this.props.render(this.state)
  }
}