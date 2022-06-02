import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import {Portfolio_el, Portfolio_title, Title_span, Portfolio_list, Portfolio_item,
       Box, Box_item, Box_image, Box_overlay, Box_overlayspan } from "./style.js";


function Portfolio () {

  const [images, setImages] = useState([]);
  useEffect( () =>{ axios.get('js/data.json').then( res => {setImages(res.data.portfolio)} ) } , [] )

  const PortfolioImages = images.map( (image) => {
    return(
      <Box_item key={image.id}>
        <Box_image src={image.image} alt=""/>
        <Box_overlay>
          <Box_overlayspan>
           Show Image
          </Box_overlayspan>
        </Box_overlay>
      </Box_item>
    ); 
  });

  return (
    <Portfolio_el id="Portfolio">
        <Portfolio_title><Title_span>My</Title_span> Portfolio</Portfolio_title>
        <Portfolio_list>
            <Portfolio_item active='1'>All</Portfolio_item>
            <Portfolio_item>HTML</Portfolio_item>
            <Portfolio_item>Photoshop</Portfolio_item>
            <Portfolio_item>Wordpress</Portfolio_item>
            <Portfolio_item>Mobile</Portfolio_item>
        </Portfolio_list>
        
        <Box>
            
            {PortfolioImages}
            
        </Box>
        
    </Portfolio_el>
  );
}

export default Portfolio;
