### React hooks

#### 组件状态 useState

使用 class 组件

```jsx
export class Input extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />;
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

`useState()` 方法接受一个参数做为状态的初始值。React 会将状态保留，每次调用会拿到状态。

`useState()` 会返回一个数组，数组的第一个值是**当前状态**，第二个值是**更新状态的函数**。一般会使用 ES6 里面的[数组解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)(Array destructuring) 来定义变量名



#### 生命周期函 useEffect



#### 性能优化 useMemo 和 useCallback
