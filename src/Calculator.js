import React, { Component } from 'react';
import './App.css';

export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      move: 0,
      param1: 0,
      sign: '',
      param2: 0,
      stepNumber: 0,
      history: [{
        param1: 0,
        sign: '',
        param2: 0,
        result: 0,
      }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    
    this.setState({
      history: [{
        param1: event.target.value,
        sign: event.target.value,
        param2: event.target.value,
        result: event.target.value,
      }],
    });
    console.log(this.state.history.param1)
  }

  handleChange(event, field){
    this.setState({ [field]: event.target.value });
  }
  
  render() {

    return (
    <div className='calculatorContainer'>
      <form onSubmit={this.handleSubmit}>
          <input 
            type = "number" 
            className='param1' 
            name='param1' 
            onChange={(event) => this.handleChange(event, "param1")}
            />
          
          <input 
            type = "text" 
            className='sign' 
            name='sign' 
            onChange={(event) => this.handleChange(event, "param1")}
            />

          <input 
            type = "number" 
            className='param2' 
            name='param2' 
            onChange={(event) => this.handleChange(event, "param1")}
            />
          
          <input 
            type = "number" 
            className='result' 
            name='result' 
            readOnly = {true}
            value = {this.state.history.param1}
            />
          
          <input type ="submit" value="Submit" />
      </form>
    </div>
    );
  }
}
