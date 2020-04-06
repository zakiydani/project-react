import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'

function App() {
  return(
    <div className = "App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
