// App.js
import React, { useState } from 'react';
import Layout from './Layout';
import Content from './Content';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('Recharge');

  const user = {
    name: 'Johnathan Smith', // Replace with actual user name
    photo: 'https://via.placeholder.com/40', // Replace with actual user photo URL
  };

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Layout user={user} onMenuClick={handleMenuClick}>
      <Content selectedItem={selectedItem} />
    </Layout>
  );
};

export default Home;
