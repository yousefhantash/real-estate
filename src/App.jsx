import Details from './components/Detailspage/Details';
import Home from './views/Home';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import PassDataRoute from './views/PassDataRoute';
import "./App.css"
import { useEffect } from 'react';
import axios from 'axios';
import Get from './API/Get';
import { ToastContainer } from 'react-toastify';



function App() {



return (

    <div>
<PassDataRoute/>
<ToastContainer />

    </div>


  );
}

export default App;
