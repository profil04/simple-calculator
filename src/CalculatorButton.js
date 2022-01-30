import React from 'react';

export default function CalculatorButton(props){
    return (
    <div>
      <button className='calculatorButton' onClick={props.onClick}> {props.value} </button>
    </div>
    );
}
