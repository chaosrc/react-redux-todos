import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import { TodoApp } from './pages/TodoApp';
import { todoApp } from './pages/reducer';
import { HashRouter, Route, Link, Redirect } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'

const state = combineReducers({ todos: todoApp })
const store = createStore(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home/user">User</Link>
              </li>
              <li>
                <Link to="/home/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact render={() => <Redirect to="/home"></Redirect>}></Route>
          <Route path="/home" component={Home} ></Route>
          <Route path="/todo" component={TodoApp} ></Route>
          <Route path="/about" exact component={About}></Route>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
