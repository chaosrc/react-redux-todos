import React, { Component, useState, useEffect } from "react";
import { getInputValue } from "./api";

export class Input extends Component {
  state = {
    value: "",
    count: 0
  };

  async componentDidMount() {
    const value = await getInputValue();
    this.setState({ value: value });
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleCount = () => {
    this.setState(preState => ({ count: preState.count + 1 }));
  };

  render() {
    return (
      <>
        <input value={this.state.value} onChange={this.handleChange} />
        <div>
          {this.state.count}
          <button onClick={this.handleCount}>+</button>
        </div>
      </>
    );
  }
}

// state with hooks
export const InputHooks = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = async () => {
      const value = await getInputValue();
      setValue(value);
    };
    update();
  }, []);

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};
