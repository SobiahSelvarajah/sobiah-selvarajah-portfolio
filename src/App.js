import React from 'react';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import './App.scss';

function App() {
  return (
    <div className='app__container'>
      <Navbar />
      <div className='app__pages'>
        <Homepage />         
      </div>
    </div>
  );
}

export default App;
