import React from 'react';
import { Link } from 'react-router-dom';
import './recentlyadded.css';
import Addedproperties from './Addedproperties';
function RecentlyAdded() {

  return (
    <div className='mx-auto bg-white px-16 py-24 px-129  '>
      <h1 className='text-custom-darkblue text-3xl font-medium'>Recently Added Properties</h1>
        <Addedproperties/>
      <Link to="" className="text-custom-blue text-cyan-600 text-center block hover:underline">Show More Properties</Link>
      
    </div>
  );
}

export default RecentlyAdded;
