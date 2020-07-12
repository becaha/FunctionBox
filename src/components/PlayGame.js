import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import SetupGame from './SetupGame';


class PlayGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {guess: null,
                        func: null,
                        play: false,
                        input: null,
                        output: null,
                        score: 0,
                        level: 0};
        this.functions = ["+","-","*","/"];
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
        let generatedFunction = "";
        for (let i in (this.state.level + 1)) {
            let rand = Math.random();
            let randFunc = this.functions[rand % this.functions.length];
            rand = Math.random();
            let randNum = this.functions[rand % (this.state.level + 9)];
            generatedFunction += randFunc + randNum;
        }
        console.log(generateFunction);
        this.setState({func: generatedFunction});
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
        console.log("do", this.state.func);
        for (let index in this.state.func) {
            let char = this.state.func[index];
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
        console.log(this.state.guess, this.state.func);
        return this.state.guess === this.state.func;
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
        this.setState({func: func, play: true});
    }

    render() {
        console.log("render",this.state.func);
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