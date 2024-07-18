import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseState from './Hooks/UseState';
import UseStateSecond from './Hooks/UseStateSecond';
import UseReducer from './Hooks/UseReducer';
import Content from './Hooks/useContextHook/Content';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseStateSecond/> */}
      {/* <UseReducer/> */}
      <Content/>
    </div>
  );
}

export default App;
