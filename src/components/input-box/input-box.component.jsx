import React, { Component } from 'react';

import './input-box.styles.css';

class InputBox extends Component {
    state = {
        logValue: ''
    };

    inputTextRef = React.createRef();
    inputSearchRef = null;

    setCallbackRef = element => {
        this.inputSearchRef = element;
    };

    componentDidMount = () => {
        console.log(this.inputTextRef);
        console.log(this.inputSearchRef);
    };

    focusHandler = () => {
        this.inputTextRef.current.focus();
    };

    logHandler = () => {
        this.inputSearchRef.focus();
        this.setState({ logValue: this.inputSearchRef.value });
        console.log('Value:', this.inputSearchRef.value);
    };

    render() {
        return (
            <div className="input-box">
                <div>
                    <input type="text" ref={this.inputTextRef} placeholder="Type something..." />
                    <button className="input-button" onClick={this.focusHandler}>
                        Focus
                    </button>
                </div>

                <div>
                    <input type="search" ref={this.setCallbackRef} placeholder="Search something..." />
                    <button className="input-button" onClick={this.logHandler}>
                        Log
                    </button>
                </div>

                <div>
                    <span>Value: {this.state.logValue}</span>
                </div>
            </div>
        );
    }
}

export default InputBox;
