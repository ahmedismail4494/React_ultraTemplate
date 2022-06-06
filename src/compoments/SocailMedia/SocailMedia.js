import React , {Component} from 'react';
import axios from 'axios';
import {SocialMediaSection, Social, Icon, SocialP, Span, SpanInfo } from "./style";

class SocailMedia extends Component {
  state = {
    socailData:[]
  }

  componentDidMount() {
    axios.get('js/data.json')
    .then( (res) => {  this.setState({socailData: res.data.social})  } )
  }


  render(){
    const {socailData} = this.state;

    const socailIcons = socailData.map((socailItem) => { 
      return(
        <Social key={socailItem.id} item={socailItem.id}>
          <Icon className={socailItem.icon}></Icon>
            <SocialP>
              <Span>{socailItem.title}</Span>
              <SpanInfo>{socailItem.body}</SpanInfo>
            </SocialP>
        </Social>
      )
     });

    return (
      <div>
          <SocialMediaSection>
              
              {socailIcons}

          </SocialMediaSection>
      </div>
    )
  }

}

export default SocailMedia;
