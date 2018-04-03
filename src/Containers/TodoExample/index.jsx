import React, { Component } from 'react';
import { v4 } from 'uuid';
import { isEmpty } from 'lodash';
import MainListArea from './MainListArea';
import Store from './Store';
import list from './list';

export default class TodoExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: list,
      add: this.add,
      deletePost: this.deletePost,
      checkPost: this.checkPost
    }
  }
  
  add = param => {
    this.setState(state => ({
      data: [...state.data, param]
    }))
  }
  
  deletePost = id => {
    const filter = this.state.data.filter(item => item.id !== id);
    this.setState({data: filter})
  }
  
  checkPost = id => {
    const flag = this.state.data.map(item => {
      if(item.id === id) {
        const param = {
          ...item,
          isChecked: !item.isChecked
        }
        return param
      }
      return item
    });
    this.setState({data: flag})
  }
  
  stateChange = (param = {}) => this.setState(state => ({...state, ...param}))

  render() {
    return (
      <div>
        <header>Todo Example</header>
        <Store.Provider value={this.state}>
          <MainListArea />
        </Store.Provider>
      </div>
    )
  }
}
