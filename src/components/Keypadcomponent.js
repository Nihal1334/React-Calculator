import React, {Component} from 'react';
import '../App.css';
class KeyPadComponent extends Component {

    render() {
        return (
            <div className="roundButton">
                <button name="(" className="gray" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name=")" className="gray" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="Clr" className="gray" onClick={e => this.props.onClick(e.target.name)}>Clr</button>
                <button name="C" className="Clear" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>

                <button name="7" className="gray" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className="gray" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" className="gray" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="+" className="black" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" className="gray"  onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className="gray" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className="gray" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" className="black" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="1" className="gray" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className="gray" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className="gray" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="*" className="black" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." className="black" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" className="gray" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" className="equal" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" className="black" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}
export default KeyPadComponent;
