import React from 'react';
import PortalsComponent from '../../Components/PortalsComponent';

const PortalExample = () => (
  <div>
    <div>inside of app id.</div>
    <PortalsComponent portalDom="portal1">
      <div>portal1</div>
    </PortalsComponent>
    <PortalsComponent portalDom="portal2">
      <div>portal2</div>
    </PortalsComponent>
    <PortalsComponent portalDom="portal3">
      <div>portal3</div>
    </PortalsComponent>
  </div>
)

export default PortalExample;