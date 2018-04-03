import { Component, createRef } from 'react';

const TestCom = () => (
  <div>test</div>
)

export default class CreateRefExample extends Component {
  constructor(props) {
    super(props)
    this.textInput = createRef();
    this.node = createRef();
  }
  
  focusTextInput = () => {
    this.textInput.current.focus();
  }
  
  paramCheck = () => {
    console.log(this.node.current.clientWidth)
    console.log('current', `id is ${this.node.current.id}`)
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <p ref={this.node} onClick={this.paramCheck} id="sample">sample</p>
      </div>
    )
  }
}