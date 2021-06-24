import React from "react";
import { Button, ConfigProvider } from "antd";

import "antd/dist/antd.less";
/*
应用根组件
*/
const App = () => {
  return (
    <ConfigProvider>
      {/*全局的antd文案都改变为中文文案*/}
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </ConfigProvider>
  );
};

export default App;
