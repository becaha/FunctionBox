import React from 'react';
import { Button, FormControl } from 'react-bootstrap';


class SetupGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {func: null};
        this.submitFunction = this.props.submitFunction.bind(this);
        this.generateFunction = this.props.generateFunction.bind(this);
    }

    render () {
        return (
            <div>
                Create your function!
                    <FormControl
                        type="text"
                        value={this.state.guess}
                        placeholder="Enter text"
                        onChange={(e) => this.setState({ func: e.target.value })}
                      />
                    <Button onClick={() => this.submitFunction(this.state.func)}>
                        Submit Function
                    </Button>
                    <Button onClick={() => this.generateFunction()}>
                        Generate Random Function
                    </Button>
            </div>
        );
    }
}

export default SetupGame;