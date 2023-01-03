import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/Header';
import './App.css';

const App = () => {
  const { pathname } = window.location;
  let Component;

  if (pathname === '/produtos') {
    Component = Products;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component />
    </div>
  );
};

export default App;
