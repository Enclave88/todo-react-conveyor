import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <p className="App-logo">Конвейер</p>
                    <h2>Welcome to React</h2>
                </div>
                <Input />
            </div>
        );
    }
}

export default App;
