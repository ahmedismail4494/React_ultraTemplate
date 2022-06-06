import './App.css';

import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Navbar from './compoments/Navbar/Navbar';
import Collection from './compoments/Collection/Collection';
import Contact from './compoments/Contact/Contact';
import Footer from './compoments/Footer/Footer';




class App extends Component {
  render(){
    return (
    <BrowserRouter>
      <div>

      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Collection /> } /> 
        <Route path="/Contact" element={ <Contact /> } /> 
      </Routes>
      <Footer />

      </div>
    </BrowserRouter>  
    );
  }
}

export default App;
