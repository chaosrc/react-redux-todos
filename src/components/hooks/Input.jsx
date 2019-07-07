import React, { Component, useState, useEffect } from "react";
import { getInputValue } from "./api";


export class Input extends Component {
    state = {
        value: ''
    }

    async componentDidMount() {
        const value = await getInputValue()
        this.setState({value: value})
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

    useEffect(() => {
        const update = async () => {
            const value = await getInputValue()
            setValue(value)
        }
        update()
    }, [])


    return (<input value={value} onChange={e => setValue(e.target.value)}></input>)
}