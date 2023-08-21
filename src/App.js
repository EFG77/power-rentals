import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Rental from './Rental';
import Services from './Pages/Services';
import Contact from './Pages/Contact';



function App () {
  
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Rental'element={<Rental/>}/>
            <Route path='/Services'element={<Services/>}/>
            <Route path='/Contact'element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;



