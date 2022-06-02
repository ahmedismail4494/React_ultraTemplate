import React, {Component} from "react";
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import Navbar from "./Component/Navbar";
import Index from "./Component/Index/index";
import Contact from "./Component/Contact/index";


class App extends Component {
  render(){
    return (

      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/Contact" component={Contact} />
          </Switch> 
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
