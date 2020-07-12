export class Function() {
    constructor(props) {
        super(props);
        this.doFunction = this.doFunction.bind(this);
    }

    doFunction(){}

    }
}

export class Add() {
    constructor(props) {
        super(props);
        this.doFunction = this.doFunction.bind(this);
    }

    doFunction(first, second) {
        return first + second;
    }
}

export class Subtract() {
    constructor(props) {
        super(props);
        this.doFunction = this.doFunction.bind(this);
    }

    doFunction(first, second) {
        return first - second;
    }
}

export class Multiply() {
    constructor(props) {
        super(props);
        this.doFunction = this.doFunction.bind(this);
    }

    doFunction(first, second) {
        return first * second;
    }
}

export class Divide() {
    constructor(props) {
        super(props);
        this.doFunction = this.doFunction.bind(this);
    }

    doFunction(first, second) {
        return first / second;
    }
}