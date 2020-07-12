import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayGame from './components/PlayGame';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {play: false};
    }

    render() {
        let screen = (
            <header className="App-header">
                <p>
                  Function Box
                </p>
                <Button onClick={() => this.setState({play: true})}>Play</Button>
              </header>
        );

        this.state.play ? screen = <PlayGame/> : screen = screen;

        return (
            <div className="App">
              {screen}
            </div>
        );
    }
}

export default App;
