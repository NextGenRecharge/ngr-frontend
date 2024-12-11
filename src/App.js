import React, { useState } from 'react';
import Routing from './routes/Routing';
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider>
      <Routing />
    </ConfigProvider >
  );
}

export default App;
