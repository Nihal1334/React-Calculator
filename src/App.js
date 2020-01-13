import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from './components/Keypadcomponent';
import ResultComponent from "./components/Result";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            expression: " "
        }
    }
    evaluate=(clickedBtn)=>{
      try{
        if(clickedBtn === "="){
          this.setState({result:eval(this.state.expression)})
          
        }else if((clickedBtn === "Clr")){
          this.setState({expression:" ", result:" "});
        }else if((clickedBtn === "C")){
          this.setState({expression:this.state.expression.slice(0,-1)});
        }
        else if(clickedBtn===undefined)
    				this.setState({result: "Math Error"}); 
        else{
          this.setState({expression:this.state.expression + clickedBtn});
        }}
        catch(err)
        {
            this.setState({result: "Math Error"});
        }
      }
    
    render() {
        return (
                <div className="container">
                    <h1 className="header">Calculator Using React</h1>
                    <div className="calculator-body">
                    <ResultComponent expression={this.state.expression} result={this.state.result}></ResultComponent>
                    <KeyPadComponent onClick={this.evaluate}></KeyPadComponent>
                    </div>
                </div>
        );  
    }
}

export default App; 