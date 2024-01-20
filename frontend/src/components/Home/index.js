// Home.js
import React from 'react';
import Header from '../Header';  // Adjust the path accordingly

import './index.css';

const Home = () => (
  <>
    <Header />
    <div className='home-container'>
      <h1 className='home-heading'>Plan Your Trip Where You Want To Go.</h1>
      <p className='home-paragraph'>There is so much to see in this world. Sit down, contemplate, and decide where you want to go</p>
      <button type="button" className='trip-button'>Plan Your Trip</button>
    </div>
  </>
);

export default Home;
