
/*
    ===============================
            About Styles
    ===============================
*/

import styled from 'styled-components';

export const About_el = styled.div`
  height: 550px;
  background: url('images/portfolio-img (4).jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width:991px) {
    height: auto
  }
`

export const About_info = styled.div`
  padding-top: 50px;
  width: 50%;
  float: right;

  @media (max-width:991px) {
    width: 100%;
    padding-top: 10px;
    float: none
  }
`

export const Info_title = styled.h2`
  font-weight: bold;
  font-size: 50px
`

export const Title_span = styled.span`
  font-weight: normal
`

export const Info_dir = styled.h4` 
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
  
  @media (max-width:991px) {  
    font-size: 30px
  }
`

export const Info_desc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8
`

export const Info_desc_a = styled.a`
  text-decoration: none
`

