import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import SetupGame from './SetupGame';
import FunctionSelection from './FunctionSelection';
import '../styles/PlayGame.css';


class PlayGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {guess: null,
                        play: false,
                        input: null,
                        output: null,
                        correct: null
                        };
        this.isCorrect = this.isCorrect.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
        this.doFunction = this.doFunction.bind(this);
        this.getOutput = this.getOutput.bind(this);
        this.computeFunction = this.computeFunction.bind(this);
    }

    computeFunction(char, func, oldComputed) {
        console.log("compute", char, func, oldComputed);
        let num = parseInt(char);
        let computed = null;
        switch(func) {
            case "+":
                computed = oldComputed + num;
                break;
            case "-":
                computed = oldComputed - num;
                break;
            case "*":
                computed = oldComputed * num;
                break;
            case "/":
                computed = oldComputed / num;
                break;
        }
        return computed;
    }

    doFunction(input) {
        let func = null;
        let computed = parseInt(this.state.input);
        console.log("do", this.props.func);
        for (let index in this.props.func) {
            let char = this.props.func[index];
            console.log(char);
            if (char == " ") {
                continue;
            }
            else if(char == "+" || char == "-" || char == "*" || char == "/") {
                func = char;
            }
            else if (func) {
                computed = this.computeFunction(char, func, computed);
            }
        }
        return computed;
    }

    getOutput() {
        let output = this.doFunction(this.state.input);
        this.setState({output: output});
    }

    isCorrect() {
        console.log(this.state.guess, this.props.func);
        return this.props.stripSpaces(this.state.guess) === this.props.func;
    }

    makeGuess() {
        if (this.isCorrect()) {
            this.setState({correct: true});
            this.generateFunction();
        }
        else {
            this.setState({correct: false});
        }
    }

    render() {

        return (
            <div>
                <div>
                    Give FunctionBox an input number
                    <FormControl
                        type="text"
                        pattern="[0-9]*"
                        value={this.state.input}
                        placeholder="Enter number"
                        onChange={(e) => this.setState({input: e.target.value})}
                      />
                    <Button onClick={() => this.getOutput()}>
                        FunctionBox Magic
                    </Button>
                </div>
                <div>
                    And the output number is: {this.state.output}
                </div>
                Guess what the function is!
                <FormControl
                    type="text"
                    value={this.state.guess}
                    placeholder="Enter text"
                    onChange={(e) => this.setState({ guess: e.target.value })}
                  />
                <Button className={`${this.state.correct ? "" : "wrong"}`} onClick={() => this.makeGuess()}>
                    Submit Function Guess
                </Button>
            </div>
        );
    }
}

export default PlayGame;