import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: 'cool'
        }
    }
    handleChange(e) {
        if (e.target.value) {
            this.setState({value: e.target.value});
        }
    }
    render() {
        return (
            <input className="App-First-Input" value={this.state.value} onChange={(e) => {this.handleChange(e)}}/>
        )
    }
}

export default Input;