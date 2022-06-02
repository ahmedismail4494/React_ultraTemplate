import React, {Component} from 'react'; 
import axios from 'axios';
import {Work_el, Work_title, Work_title_span, Work_part, Work_icon,  Part_title, Work_line, Part_desc } from './style.js';



class Work extends Component {

  state= {
    works: []
  }

  componentDidMount(){
    axios.get('js/data.json').then( res => { this.setState({ works: res.data.works }) } )
  }

  render(){

    const {works} = this.state;
    const worklist = works.map( (workitem) => { 
      return( 
        <Work_part first={workitem.id} key={workitem.id} >
          <Work_icon className={workitem.icon_name}></Work_icon>
          <Part_title > {workitem.title} </Part_title>
          <Work_line  />
          <Part_desc>
            {workitem.body}
          </Part_desc>
        </Work_part>
       );
      
    });



    return (     
      <Work_el id="Work">
          <div className="container">
              <Work_title><Work_title_span>My</Work_title_span> Work</Work_title>
              
              {worklist}
              
          </div>
      </Work_el>
      
    );
  }
}

export default Work;




