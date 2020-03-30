import React from 'react';

// components
import Menu from './components/menuComponent/menu';
import Content from './components/contentComponent/content';

// includes 
import './assets/css/main.css'

function App() {
  return (
    <div className="App"> 
      <div className="MainWrapper"> 
        <Menu />
        <Content />
      </div>
    </div>
  ) 
}

export default App;
