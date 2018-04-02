import React from 'react';
import Store from '../Store';

const withTheme = Component => props => (
  <Store.Consumer>
    {store => <Component {...props} store={store} />}
  </Store.Consumer>
)

export default withTheme;