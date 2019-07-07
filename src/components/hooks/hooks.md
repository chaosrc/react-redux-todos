

### React hooks



Hooks 是 React 16.8 中新增的功能，可以在不用 class 的情况下使用 state 和其他 React 特性 [^1]，100% 向后兼容，可以与 class 组件共存。



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
```

使用 hooks

```jsx
export const InputHooks = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};
```

`useState()` 方法接受一个参数做为状态的初始值。React 会将状态保留，每次调用会拿到状态。

`useState()` 会返回一个数组，数组的第一个值是**当前状态**，第二个值是**更新状态的函数**。一般会使用 ES6 里面的[数组解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)(Array destructuring) 来定义变量名



#### 生命周期 useEffect

class 组件

```jsx
export class Input extends Component {
  state = {
    value: ""
  };

  async componentDidMount() {
    const value = await getInputValue();
    this.setState({ value: value });
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />;
  }
}
```

hooks

```jsx
export const InputHooks = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const update = async () => {
      const value = await getInputValue();
      setValue(value);
    };
    update();
  }, []);

  return <input value={value} onChange={e => setValue(e.target.value)} />;
};
```

`useEffect` 可以认为是生命周期函数 componentDidMount、componentDidUpdate 和 componentWillUnmount 的合并。在函数组件中执行组件的副作用(side effects)，比如网络请求、直接对 DOM 进行操作

`useEffect` 默认**每次组件渲染后**都会调用，包括首次渲染。

`useEffect` 的第二个参数为 effect 的依赖数组，只有其中一个依赖更新后才会调用 effect 方法。如果没有传第二个参数默认每次都会调用，如果第二个参数为空的数组，那么只有在首次渲染的时候会被调用，此时效果和 componentDidMount 一样




清理 effect

effcet 函数可以返回一个清理函数

```js
useEffect(() => {
  // do something

  return () => {
    // 清理函数
  }
})
```

清理函数在每次 effect 函数调用之前或者组件卸载之前调用

```jsx
export const Clear = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("hello effect");
    }, 300);
    return () => {
      clearInterval(id);
      console.log("clear");
    };
  }, []);
  return <span>Clear Effect</span>;
};

export const PerformClear = () => {
  const [isStart, setStart] = useState(false);

  return (
    <div>
      {isStart && <Clear />}
      <button onClick={() => setStart(!isStart)}>Start Clear</button>
    </div>
  );
};
```



#### Hooks 的规则 [^2]

- 只能在 React 函数组件、或者自定义 Hooks 中调用
- 只能在函数的顶层调用，不能在循环、条件语句或者内部函数中调用

Tips:
 通过 Eslint插件 `eslint-plugin-react-hooks` 来控制



#### 性能优化 useMemo 和 useCallback



#### 其他 hooks：useContext、useReducer



#### 自定义 Hooks

参考 react-use ：https://github.com/streamich/react-use



[^1]: https://reactjs.org/docs/hooks-intro.html
[^2]: https://reactjs.org/docs/hooks-rules.html
