import React from 'react';
import "./OverView.css";
import Buying from './Buying';
import Selling from './Selling';
import Renting from './Renting';
function OverView() {
  return (
    <div className='bg-custom-Almond mx-auto container border-t pb-36'>
      <h1 className='text-center text-xl py-10 font-medium	'>
        Whether you want to buy, sell or rent, we're here to help.
      </h1>
      <div className='grid md:grid-cols-3 gap-10  w-11/12 mx-auto '>
        <Buying/>
        <Selling/>
        <Renting/>
      </div>
    </div>
  );
}

export default OverView;
