import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './components/Screen';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {play: false};
    }

    render() {
        let screen = (
            <div className="screen">
                <p>
                  Function Box
                </p>
                <Button onClick={() => this.setState({play: true})}>Play</Button>
            </div>
        );

        this.state.play ? screen = <Screen/> : screen = screen;

        return (
            <div>
                {screen}
            </div>
        );
    }
}

export default App;
