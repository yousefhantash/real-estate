import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './recentlyadded.css';
import Addedproperties from './Addedproperties';
import { LandContext } from '../../views/PassDataRoute';

function RecentlyAdded() {
  const data = useContext(LandContext);

  return (
    <div className='mx-auto bg-white px-16 py-24 px-129  '>
      <h1 className='text-custom-darkblue text-3xl font-medium'>Recently Added Properties</h1>
        <Addedproperties/>
      <NavLink to="/property" state={data} className="text-custom-blue text-cyan-600 text-center block hover:underline ">Show More Properties</NavLink>
      
    </div>
  );
}

export default RecentlyAdded;
