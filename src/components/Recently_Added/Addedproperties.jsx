import React, { createContext, useContext, useRef } from 'react';
import item1 from "../../images/Recentlyaddedproperties/item1.jpg";
import btn_icon from "../../images/Recentlyaddedproperties/Vector.png";
import './RecentlyAdded';

import { Link, NavLink } from 'react-router-dom';
import PropsItem from './PropsItem';
import { LandContext } from '../../views/PassDataRoute';

function Addedproperties() {
  // here we got the data from the home.jsx and we use useContext
  const data = useContext(LandContext);
   



     

// here a map for the last 4 items from the data so it  appers in the recently add 

    return (<>
    {data.slice(-4).map((item, index) => (
              
              <PropsItem item={item}/>
      ))}
      </>
  )
}

export default Addedproperties
