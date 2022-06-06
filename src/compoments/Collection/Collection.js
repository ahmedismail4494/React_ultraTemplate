import './Collection.css';

import React, {Component} from 'react';

import Home from './../Home/Home';
import Work from './../Work/Work';
import Portfolio from './../Portfolio/Portfolio';
import Profile from './../Profile/Profile';
import About from './../About/About';
import SocailMedia from './../SocailMedia/SocailMedia';




class Collection extends Component {
  render(){
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocailMedia />
      </div> 
    );
  }
}

export default Collection;
