import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import SetupGame from './SetupGame';
import PlayGame from './PlayGame';
import '../styles/Screen.css';


class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { func: null,
                        play: false,
                        level: 0};
        this.functions = ["+","-","*","/"];
        this.submitFunction = this.submitFunction.bind(this);
        this.generateFunction = this.generateFunction.bind(this);
        this.stripSpaces = this.stripSpaces.bind(this);
    }

    stripSpaces(func) {
        let noSpaces = "";
        for (let index in func) {
            let char = func[index];
            if (char == " ") {
                continue;
            }
            else {
                noSpaces += char;
            }
        }
        return noSpaces;
    }

    submitFunction(func) {
        let noSpacesFunc = this.stripSpaces(func);
        this.setState({func: noSpacesFunc, play: true});
    }

    generateFunction() {
        let generatedFunction = "";
        for (let i = 0; i < this.state.level + 1; i++) {
            let rand = Math.floor(Math.random() * (this.functions.length - 1));
            let randFunc = this.functions[rand];
            let min = 0;
            if (randFunc === "/") {
                min = 1;
            }
            let randNum = Math.floor(Math.random() * ((this.state.level + 1) * 10 - 1 - min)) + min;
            generatedFunction += randFunc + randNum;
        }
        console.log(generatedFunction);
        this.setState({func: generatedFunction, play: true});
    }

    render() {
        let screen = <PlayGame func={this.state.func} stripSpaces={this.stripSpaces}/>;
        if (!this.state.play) {
            screen = (
                <SetupGame functions={this.functions} level={this.state.level} stripSpaces={this.stripSpaces}
                    submitFunction={this.submitFunction} generateFunction={this.generateFunction}/>
            );
        }

        return (
            <div>
                <header className="app-header">
                    Header
                </header>
                {screen}
            </div>
        );
    }
}

export default Screen;