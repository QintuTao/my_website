import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Board from './Components/Board/Board';
import Portfolio from './Components/Board/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Board name="about-me"></Board>
      <Board name="portfolio"></Board>
    </div>
  );
}

export default App;
