import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton';
import './App.css';

export default class Calculator extends Component {

  
  renderCalculatorButton(i) {
    const valueTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '=' ]
    return(
      <CalculatorButton
        value = {valueTable[i]}
        onClick ={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
    <div className='calculatorContainer'>
        <div className='display'>{this.props.result}</div>
        <div className='history'></div>
        {this.renderCalculatorButton(1)}
        {this.renderCalculatorButton(2)}
        {this.renderCalculatorButton(3)}
        {this.renderCalculatorButton(4)}
        {this.renderCalculatorButton(5)}
        {this.renderCalculatorButton(6)}
        {this.renderCalculatorButton(7)}
        {this.renderCalculatorButton(8)}
        {this.renderCalculatorButton(9)}
        {this.renderCalculatorButton(0)}
        {this.renderCalculatorButton(10)}
        {this.renderCalculatorButton(11)}
        {this.renderCalculatorButton(12)}
        {this.renderCalculatorButton(13)}
        {this.renderCalculatorButton(14)}
    </div>
    );
  }
}
