import React from 'react';
import NavState from './context/navState';
import MainMenu from './components/MainMenu';
import Main from './App/Main/Main';

function App() {
  return (
    <NavState>
      <MainMenu />
    </NavState>
    
  );
}

export default App;