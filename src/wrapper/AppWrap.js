import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const AppWrap = (Component) => function AnimatedComponent() {
  return (
    <>
      <Header />
      <Sidebar />
      <Component />
    </>
  );
};

export default AppWrap;