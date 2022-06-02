import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {Social_media, Social, Social_icon, Social_p, Social_span   } from "./style.js";



function SocialMedia () {

  const [Boxs , setBoxs] = useState([]);
  useEffect(() => { axios.get('js/data.json').then( res => setBoxs(res.data.social) )} , [] );
  const socialBox = Boxs.map( (box) => {return( 
    <Social key={box.id} type={box.id}> 
            <Social_icon className={box.icon}></Social_icon> 
            <Social_p>
                <Social_span >{box.title}</Social_span>
                <Social_span kind="info2">{box.body}</Social_span>
            </Social_p>
        </Social>
  )} );





  return (
            
    <Social_media id='SocialMedia' >

        {socialBox}    
        
    </Social_media>

  );
}

export default SocialMedia;
