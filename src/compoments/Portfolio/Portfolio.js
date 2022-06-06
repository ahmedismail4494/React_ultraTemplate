import { useEffect, useState } from 'react';

import {PortfolioSection, PortfolioTitle, TitleSpan, PortfolioList, PortfolioItem, BoxDiv, 
        DivImg, Overlay, OverlaySpan} from './style';



const Portfolio = () => {


  let [imgData,setImgData] = useState([]);

  useEffect(() => {
    fetch('js/data.json')
    .then(response => response.json())
    .then(JsonData => setImgData(JsonData.portfolio));
  } , [])


const PortfolioImagesData = imgData.map((imageItem => {
  return(
    <BoxDiv key={imageItem.id}>
      <DivImg src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>
            Show Image
          </OverlaySpan>
        </Overlay>
    </BoxDiv>
  )
}))


  return (
    <div>
        <PortfolioSection id='portfolio'>
            <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div class="box">
                
              { PortfolioImagesData }
                
            </div>
            
        </PortfolioSection>
    </div>
  )
}

export default Portfolio
