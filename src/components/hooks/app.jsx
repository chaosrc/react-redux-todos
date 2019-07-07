import React from "react";
import styles from './app.module.scss'
import { Input, InputHooks, PerformClear } from "./Input";

const App = () => {
  return (
    <div className={styles.App}>
      <h3>class 组件</h3>
      <Input />
      <h3>hooks 组件</h3>
      <InputHooks></InputHooks>

      <h3>清理 Effect</h3>
      <PerformClear></PerformClear>
    </div>
  );
};

export default App;
