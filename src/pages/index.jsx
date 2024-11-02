import React from 'react';
import { theme } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Title>首頁</Title>
    </>
  )
}


export default App;