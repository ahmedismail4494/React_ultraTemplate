
import axios from 'axios';
import React, {Component} from 'react';
import {WorkSection, WorkTitle, WorkTitleSpan, WorkPart, Icon, PartTitle, Line, PartDesc} from "./style.js"

class Work extends Component {

  state = {
    workParts : []
  }
  
  componentDidMount () {
    axios.get('js/data.json')
    .then( (res) => {  this.setState({workParts: res.data.works})  } )
  }

render() {

  const {workParts} = this.state;

  const worksList = workParts.map( (Wpart) => {
    return(
      <WorkPart first={Wpart.id}  key={Wpart.id}>
        <Icon className={Wpart.icon_name}></Icon>
        <PartTitle>{Wpart.title}</PartTitle>
        <Line />
        <PartDesc>
          {Wpart.body}
        </PartDesc>
      </WorkPart>
    )
  });

  return (
    <div>
        <WorkSection id='work'>
            <div className="container">
                <WorkTitle className="work-title"><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>

               {worksList}
                
            </div>
        </WorkSection>
    </div>
  )
}
  
}

export default Work
