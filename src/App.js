import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Intro from './Components/Intro/Intro'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Intro></Intro>
    </div>
  );
}

export default App;
