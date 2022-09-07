import { useEffect } from "react";

import * as test from "./test/test";

import "./app.less";

function App(props) {
  useEffect(() => {
    global.test = test;
  }, []);

  // props.children 是将要会渲染的页面
  return props.children;
}

export default App;
