import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

function App() {
  return (
    <div className='app__container'>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;