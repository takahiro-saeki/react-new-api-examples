import React, {Fragment, Context} from 'react'

const Display = () => (
  <Context.Consumer>
    {({ state, actions }) => (
      <Fragment>
        <span>{state.count}</span>
        <button onClick={actions.increment}>+</button>
      </Fragment>
    )}
  </Context.Consumer>
)

export default Display;