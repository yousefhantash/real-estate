import Details from './components/Detailspage/Details';
import Home from './views/Home';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';



function App() {

  return (

    <div className="bg-[#F5F2EF]">
          <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties/post/:name" element={<Details />} />
    </Routes>
    </BrowserRouter>
    </div>
    

  );
}

export default App;
