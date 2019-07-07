import React from "react";
import styles from './app.module.scss'
import { Input, InputHooks } from "./Input";

const App = () => {
  return (
    <div class={styles.App}>
      <h3>class 组件</h3>
      <Input />
      <h3>hooks 组件</h3>
      <InputHooks></InputHooks>
    </div>
  );
};

export default App;
