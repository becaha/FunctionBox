import React from 'react';
import { Button, FormControl } from 'react-bootstrap';


class SetupGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answer: null};
        this.submitFunction = this.props.submitFunction.bind(this);
    }

    render () {
        return (
            <div>
                Create your function!
                    <FormControl
                        type="text"
                        value={this.state.guess}
                        placeholder="Enter text"
                        onChange={(e) => this.setState({ answer: e.target.value })}
                      />
                    <Button onClick={() => this.submitFunction(this.state.answer)}>
                        Submit Function
                    </Button>
                    <Button>
                        Generate Random Function
                    </Button>
            </div>
        );
    }
}

export default SetupGame;