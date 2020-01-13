import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result,expression} = this.props;
        return (
            <div>
            <div className="result">
            <p className="result">{result}</p>
            </div>
            <div className="result">
            <p className="expression">{expression}</p>
            </div>
            </div>
    );
    }
}
export default ResultComponent;