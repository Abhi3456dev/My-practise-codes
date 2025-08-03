import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import First from './login/first';
import Second from './login/second';
import Third from './login/third';
import Man from './nav/man';
import Hy from './compi/Hy';
import Ass from './compi/Ass';
import Section from './compi/Section';
const App = () => {
  const data=useContext(dataContext)
  return (
    
    <div>
      <h1>This is the main content area{data}</h1>
      <Hy />
      <Ass />
      <Section />
      

    </div>
  );
};
export default App;