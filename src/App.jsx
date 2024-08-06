import Details from './components/Detailspage/Details';
import Home from './views/Home';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import PassDataRoute from './views/PassDataRoute';



function App() {

  return (

    <div className="bg-[#F5F2EF]">
<PassDataRoute/>
    </div>
    

  );
}

export default App;
