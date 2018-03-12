import React, { Component } from 'react';
import Counter from '../../Components/Counter';

//{({count}) => <div>{count}</div>}

export default class ChildRender extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Counter>
        <div>test</div>
      </Counter>
    )
  }
}
