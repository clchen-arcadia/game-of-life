import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid';

const ROWS = 10;
const COLS = 10;
const INITIAL_CHANCE = 0.25;

function App() {
  return (
    <div className="App">
      <Grid
        nrows={ROWS}
        ncols={COLS}
        chanceStartLive={INITIAL_CHANCE}
      />
    </div>
  );
}

export default App;
