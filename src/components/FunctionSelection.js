import React from 'react';
import { Button, FormControl, Card } from 'react-bootstrap';
import '../styles/FunctionSelection.css';

class FunctionSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funcPick: true,
            func: ""
        };
        this.updateFunction = this.updateFunction.bind(this);
        this.submitFunction = this.props.submitFunction.bind(this);
    }

    updateFunction(expressionToken, funcPicked) {
        let space = "";
        if (funcPicked) {
            space = " ";
        }
        let updatedFunc = this.state.func + space + expressionToken + space;
        this.setState({func: updatedFunc, funcPick: !funcPicked});
    }

    render() {
        let functionButtons = this.props.functions.map(func => (
            <Button disabled={!this.state.funcPick}
                onClick={() => {this.updateFunction(func, true)}}>
                {func}
            </Button>
        ));
        let numRange = []
        for (let i = 0; i < (this.props.level + 1) * 10; i++) {
            numRange.push(i);
        }
        let numberButtons = numRange.map(num => (
            <Button disabled={this.state.funcPick}
                onClick={() => {this.updateFunction(num, false)}}>{num}</Button>
        ));

        return (
            <div>
                <div>{functionButtons}</div>
                <div>{numberButtons}</div>
                <div>
                    <Button className="funcDisplay">
                      Function:{this.state.func}
                    </Button>
                </div>
                <Button disabled={!this.state.funcPick || (this.state.func.length < 1)}
                    onClick={() => this.submitFunction(this.state.func)}>
                    Submit Function
                </Button>
            </div>
        );
    }
}

export default FunctionSelection;