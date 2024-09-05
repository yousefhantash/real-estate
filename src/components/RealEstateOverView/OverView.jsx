import React from 'react';
import './OverView.css';
import Buying from './Buying';
import Selling from './Selling';
import Renting from './Renting';

function OverView() {
  return (
    <div className='container mx-auto border-t pb-36 px-4'>
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl py-10 font-medium'>
        Whether you want to buy, sell or rent, we're here to help.
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        <Buying />
        <Selling />
        <Renting />
      </div>
    </div>
  );
}

export default OverView;
