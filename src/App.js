import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import { TodoApp } from './pages/TodoApp';
import { todoApp } from './pages/reducer';

const state = combineReducers({ todos: todoApp })
const store = createStore(state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoApp></TodoApp>
      </Provider>
    </div>
  );
}

export default App;
