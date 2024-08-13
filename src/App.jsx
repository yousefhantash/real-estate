import Details from './components/Detailspage/Details';
import Home from './views/Home';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import PassDataRoute from './views/PassDataRoute';
import Contactus from './views/Contactus';
import Policy from './views/Policy';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Terms from './views/Terms';




function App() {

  return (

    <div>
<PassDataRoute/>
    </div>


  );
}

export default App;
