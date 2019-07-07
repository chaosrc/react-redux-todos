import React, { Component, useState } from "react";


export class Input extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return (<input value={this.state.value} onChange={this.handleChange} ></input>)
    }
}

// state with hooks
export const InputHooks = () => {
    const [value, setValue] = useState('')
    return (<input value={value} onChange={e => setValue(e.target.value)}></input>)
}