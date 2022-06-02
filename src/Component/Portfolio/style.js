
/*
    ===============================
            Portfolio Styles
    ===============================
*/

import styled from 'styled-components';


export const Portfolio_el = styled.div`
  background: #f8f8f8;
  padding-top: 50px; 
  overflow: hidden;
` 

export const Portfolio_title = styled.h2`
  text-align: center;
  font-size: 35px
`

export const Title_span = styled.span`
  font-weight: normal
`

export const Portfolio_list = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0
`

export const Portfolio_item = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;

  background: ${props => props.active ? '#eb5424' : '' };
  color: ${props => props.active ? '#fff' : '#000' };

  @media (max-width:575px) {
        display: block;
        margin: auto
`
export const Box = styled.div`
  
`

export const Box_item = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;

  &:hover > div{
    opacity: 1
  }

  @media (max-width:575px) {
        width: 100%;
  }
  
  @media (min-width:576px) and (max-width : 768px ){
        width: 50%;
  }
`

export const Box_image = styled.img`
  width: 100%
`

export const Box_overlay = styled.div` 
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(235,84,36 , 0.5);
  font-size: 15px;
  opacity: 0
`

export const Box_overlayspan = styled.span` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #eb5424;
  color: #eb5424;
  font-weight: bold;
`

