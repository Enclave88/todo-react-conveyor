import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Button from './Button.js';

class App extends Component {
    constructor() {
        super();
        this.state={value: 'stuee'}
    }
    handleChange(e) {
        if (e.target.value) {
            this.setState({value: e.target.value});
        }
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <p className="App-logo">Конвейер</p>
                    <h2>Welcome to React</h2>
                </div>
                <Input value={this.state.value} onChange={(e) => {this.handleChange(e)}} />
                <Button />
            </div>
        );
    }
}

export default App;
