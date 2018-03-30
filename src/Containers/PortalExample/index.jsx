import React, { Component } from 'react';
import PortalsComponent from '../../Components/PortalsComponent';

export default class PortalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  add = () => {
    this.setState(state => ({count: ++state.count}))
  }
  
  render() {
    const { count } = this.state;
    return (
      <div>
        <div onClick={this.add}>inside of app id.</div>
        <PortalsComponent portalDom="portal1">
          <div onClick={() => alert('portal1')}>portal1</div>
        </PortalsComponent>
        <PortalsComponent portalDom="portal2">
          <div onClick={() => console.log('portal2')}>portal2</div>
        </PortalsComponent>
        <PortalsComponent portalDom="portal3">
          <div onClick={this.add}>add number</div>
        </PortalsComponent>
        <PortalsComponent portalDom="count-area">
          <div>count is :{count}</div>
        </PortalsComponent>
      </div>
    )
  }
}