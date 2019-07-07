import React, { Component, useState, useEffect } from "react";
import { getInputValue } from "./api";

export class Input extends Component {
  state = {
    value: "",
    count: 0
  };

<<<<<<< HEAD
    async componentDidMount() {
        const value = await getInputValue()
        this.setState({value: value})
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
=======
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleCount = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };
>>>>>>> hooks-state-2

  render() {
    return (
      <>
        <input value={this.state.value} onChange={this.handleChange} />
        <div>
          {this.state.count}
          <button  onClick={this.handleCount}>+</button>
        </div>
      </>
    );
  }
}

// state with hooks
export const InputHooks = () => {
<<<<<<< HEAD
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
=======
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  return (
      <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div>
          {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      </>
  )
};
>>>>>>> hooks-state-2
