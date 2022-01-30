import React from 'react';
import './App.css';
import Calculator from './Calculator';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      history: [{
        operations: Array(5).fill(null)
      }],
      firstIsNext: true,
      firstParameter: "",
      secondParameter: "",
      operationSign: "",
      result: 0,
      stepNumber: 0,
    }
  }

  handleClick(i) {
    const firstParameter = this.state.firstParameter;
    const history = this.state.history;
    const current = history[history.length - 1];
    const operations = current.operations.slice();

    if (i >= 0 && i <= 9) {
      this.setState({
        firstParameter: firstParameter + String(i)
      })
    } else {
      switch (i) {
        case 10:
          operations[0] = this.state.firstParameter;
          if (this.state.firstIsNext) {
            this.setState({
              history: history.concat([{
                operations: operations
              }]),
              firstIsNext: false,
              operationSign: '+'
            })
          }
          break;
        case 11:
          operations[0] = this.state.firstParameter;
          if (this.state.firstIsNext) {
            this.setState({
              history: history.concat([{
                operations: operations
              }]),
              firstIsNext: false,
              operationSign: '-'
            })
          }
          break;
        case 12:
          operations[0] = this.state.firstParameter;
          if (this.state.firstIsNext) {
            this.setState({
              history: history.concat([{
                operations: operations
              }]),
              firstIsNext: false,
              operationSign: '*'
            })
          }
          break;
        case 13:
          operations[0] = this.state.firstParameter;
          if (this.state.firstIsNext) {
            this.setState({
              history: history.concat([{
                operations: operations
              }]),
              firstIsNext: false,
              operationSign: '/'
            })
          }
          break;
        case 14:
          operations[3] = this.state.firstParameter;
          switch (this.state.operationSign) {
            case '+':
              operations[0] = this.state.firstParameter;
              operations[1] = this.state.operationSign;
              operations[2] = this.state.secondParameter;
              this.setState({
                result: Number(this.state.firstParameter) + Number(this.state.secondParameter),
                history: history.concat([{
                  operations: operations
                }]),
              })
              operations[4] = this.state.result;
              break;
            case '-':
              operations[0] = this.state.firstParameter;
              operations[1] = this.state.operationSign;
              operations[2] = this.state.secondParameter;
              this.setState({
                result: Number(this.state.firstParameter) - Number(this.state.secondParameter),
                history: history.concat([{
                  operations: operations
                }]),
              })
              operations[4] = this.state.result;
              break;
            case '*':
              operations[0] = this.state.firstParameter;
              operations[1] = this.state.operationSign;
              operations[2] = this.state.secondParameter;
              this.setState({
                result: Number(this.state.firstParameter) * Number(this.state.secondParameter),
                history: history.concat([{
                  operations: operations
                }]),
              })
              operations[4] = this.state.result;
              break;
            case '/':
              operations[0] = this.state.firstParameter;
              operations[1] = this.state.operationSign;
              operations[2] = this.state.secondParameter;
              this.setState({
                result: Number(this.state.firstParameter) / Number(this.state.secondParameter),
                history: history.concat([{
                  operations: operations
                }]),
              })
              operations[4] = this.state.result;
              break;
          }
          break;
        default:
        // code block
      }
    }
  }

  jumpTo(step) {
    const firstParameter = this.state.firstParameter;
    const history = this.state.history;
    const current = history[history.length - 1];
    const operations = current.operations.slice();
    this.setState({
      stepNumber: step,
      firstIsNext: true,
      firstParameter: operations[0],
      operationSign: operations[1],
      secondParameter: operations[2],
      result: operations[4],
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const actions = history.map((step, action) => {
      const desc = action ?
        'Go to action #' + action :
        'Go to game start';
      return (
        <li key={action}>
          <button onClick={() => this.jumpTo(action)}>{desc}</button>
        </li>
      );
    });

    return (
      <div>
      <Calculator
        onClick={(i) => this.handleClick(i)}
        result={this.state.result}
      />
      <ol>{actions}</ol>
      </div>
    );
  }
}

