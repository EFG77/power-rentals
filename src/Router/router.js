import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import Rental from '../Pages/RentalPage/Rental';




const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Rental' element={<Rental/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Router;