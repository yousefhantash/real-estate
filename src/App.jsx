import Details from './components/Detailspage/Details';
import Home from './views/Home';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import PassDataRoute from './views/PassDataRoute';
import "./App.css"
import { useEffect } from 'react';
import axios from 'axios';
import Get from './API/Get';



function App() {



return (

    <div>
<PassDataRoute/>
    </div>


  );
}

export default App;
