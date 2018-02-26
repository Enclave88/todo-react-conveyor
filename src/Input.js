import {Component} from 'react'

class Input extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <input className="App-First-Input" value={this.props.value} onChange={this.props.onChange} />
        )
    }
}

export default Input;