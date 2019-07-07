### React hooks

Hooks 是 React 16.8 中新增的功能，可以在不用 class 的情况下使用 state 和其他React特性 [^1]，100% 向后兼容，可以与class组件共存。

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
class 组件
```jsx
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

```
hooks
```jsx
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
```



#### 性能优化 useMemo 和 useCallback


#### 其他 hooks：useContext、useReducer



[^1]: https://reactjs.org/docs/hooks-intro.html