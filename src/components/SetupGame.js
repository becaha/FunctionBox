import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import FunctionSelection from './FunctionSelection';

class SetupGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {func: null};
        console.log(this.props);
        this.submitFunction = this.props.submitFunction.bind(this);
        this.generateFunction = this.props.generateFunction.bind(this);
    }

    render () {
        return (
            <div>
                Create your function!
                    <FunctionSelection functions={this.props.functions} level={this.props.level}
                        submitFunction={this.props.submitFunction}/>
                    <Button onClick={() => this.generateFunction()}>
                        Generate Random Function
                    </Button>
            </div>
        );
    }
}

export default SetupGame;