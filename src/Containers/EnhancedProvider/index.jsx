import React  from 'react'

const ThemeContext = React.createContext('count')

export default class EnhancedProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            increment: () => this.setState({ count: this.state.count + 1 }),
          }
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}