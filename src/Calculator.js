import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton';

export default class Calculator extends Component {
  render() {
    return (
    <div>
        <div className='display'></div>
        <div className='history'></div>
        <CalculatorButton sign = '1'></CalculatorButton>
        <CalculatorButton sign = '2'></CalculatorButton>
        <CalculatorButton sign = '3'></CalculatorButton>
        <CalculatorButton sign = '4'></CalculatorButton>
        <CalculatorButton sign = '5'></CalculatorButton>
        <CalculatorButton sign = '6'></CalculatorButton>
        <CalculatorButton sign = '7'></CalculatorButton>
        <CalculatorButton sign = '8'></CalculatorButton>
        <CalculatorButton sign = '9'></CalculatorButton>
        <CalculatorButton sign = '0'></CalculatorButton>
        <CalculatorButton sign = '+'></CalculatorButton>
        <CalculatorButton sign = '-'></CalculatorButton>
        <CalculatorButton sign = '*'></CalculatorButton>
        <CalculatorButton sign = '/'></CalculatorButton>
        <CalculatorButton sign = '='></CalculatorButton>
    </div>
    );
  }
}
