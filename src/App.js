import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state={contador : 0}
  this.onKeyUpHandler=this.onKeyUpHandler.bind(this)
}
  onKeyUpHandler(event){  
    this.setState({ 
     contador: event.target.value.length     
    })
  }

  render() {
    return (
      <div className="container">
        <textarea id="inc" rows="3" onKeyUp={ this.onKeyUpHandler }></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }
}

export default App;
