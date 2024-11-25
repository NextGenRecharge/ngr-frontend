import React, { useState } from 'react';
import Routing from './routes/Routing';
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#5F259F' } }}>
      <Routing />
    </ConfigProvider>
  );
}

export default App;
