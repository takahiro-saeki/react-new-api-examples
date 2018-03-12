import { Component } from 'react';
import { createPortal } from 'react-dom';
import { string, element } from 'prop-types';

class PortalsComponent extends Component {
  static defaultProps = {
    portalDom: '',
    children: null
  };

  static propTypes = {
    portalDom: string,
    children: element
  };

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.portalDom = document.getElementById(this.props.portalDom);
  }

  componentDidMount() {
    this.portalDom.appendChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default PortalsComponent;
