import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Plan from './Components/Plan';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  
  return (
    <div className="App">
     <Header/>
     <Plan/>
     <Footer/>
    </div>
  );
}

export default App;
