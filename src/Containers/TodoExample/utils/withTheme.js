import React from 'react';
import Store from '../Store';

const withTheme = dispatch => Component => props => {
  return (
    <Store.Consumer>
      {store => <Component {...props} {...dispatch(store)} store={store} />}
    </Store.Consumer>
  )
}

export default withTheme;