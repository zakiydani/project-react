import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/navbar'
import Home from './components/home'

function App() {
  return(
    <div className = "App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
