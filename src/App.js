import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Rental from './Rental';



function App () {
  
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Rental'element={<Rental/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;



