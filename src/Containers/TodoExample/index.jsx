import React, { Component } from 'react';
import { v4 } from 'uuid';
import MainListArea from './MainListArea';
import Store from './Store';
import list from './list';

export default class TodoExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: list,
      add: this.add
    }
  }
  
  add = () => {
    this.setState(state => ({
      data: [...state.data, {id: v4(), title: 'test data'}]
    }))
  }

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
