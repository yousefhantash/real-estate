import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WarppedFindP from "./components/FindP";
import WarppedNavbar from "./components/Navbar";
import WarppedPlatform from "./components/Platform";
import Home from './views/Home';




function App() {
  return (
    <div className="bg-[#F5F2EF]">

  
  <WarppedNavbar/>

  <WarppedFindP/>
  <WarppedPlatform/> 

  <Home/>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> 

  



     </div>
    
  );
}

export default App;
