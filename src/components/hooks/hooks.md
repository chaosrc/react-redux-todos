### React hooks

#### 组件状态 useState

使用 class 组件

```jsx
export class Input extends Component {
  state = {
    value: "",
    count: 0
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleCount = () => {
    this.setState(preState = ({count: preState.count + 1}))
  }

  render() {
    return (
      <>
        <input value={this.state.value} onChange={this.handleChange} />
        <div>
        {this.state.count}<button ></button>
        </div>
      <>
    );
  }
}
```

使用 hooks

```jsx
export const InputHooks = () => {
  const [value, setValue] = useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
};
```

#### 生命周期函 useEffect

#### 性能优化 useMemo 和 useCallback
