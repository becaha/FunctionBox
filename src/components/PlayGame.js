import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import SetupGame from './SetupGame';


class PlayGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {guess: null,
                        answer: null,
                        play: false,
                        input: null,
                        output: null,
                        score: 0};
        this.generateFunction = this.generateFunction.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
        this.doFunction = this.doFunction.bind(this);
        this.getOutput = this.getOutput.bind(this);
        this.computeFunction = this.computeFunction.bind(this);
        this.submitFunction = this.submitFunction.bind(this);
    }

    componentDidMount() {
        this.generateFunction();
    }

    generateFunction() {
        this.setState({answer: "x + 1 * 3"});
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

    // TODO
    doFunction(input) {
        let func = null;
        let computed = parseInt(this.state.input);
        console.log("do", this.state.answer);
        for (let index in this.state.answer) {
            let char = this.state.answer[index];
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
        console.log(this.state.guess, this.state.answer);
        return this.state.guess === this.state.answer;
    }

    makeGuess() {
        if (this.isCorrect()) {
            this.setState({score: this.state.score + 1});
            this.generateFunction();
        }
        else {
            this.setState({score: this.state.score - 1});
        }
    }

    submitFunction(func) {
        this.setState({answer: func, play: true});
    }

    render() {
        console.log("render",this.state.answer);
        let screen = (
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
                <Button onClick={() => this.makeGuess()}>
                    Submit Function Guess
                </Button>
                <div>
                    Score: {this.state.score}
                </div>
            </div>
        );
        if (!this.state.play) {
            screen = (
                <SetupGame submitFunction={this.submitFunction}/>
            );
        }

        return (
            <div>
                {screen}
            </div>
        );
    }
}

export default PlayGame;