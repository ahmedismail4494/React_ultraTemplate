
/*
    ===============================
            About Styles
    ===============================
*/
import styled from 'styled-components';



export const AboutSection = styled.div`
  height: 500px;
  background: url('images/portfolio-img (13).jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width:991px) {
    height: auto
  }
`

export const AboutInfo = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  width: 50%;
  float: right;

  @media (max-width:991px) {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    float: none
  }
`

export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px
`

export const TitleSpan = styled.span`
  font-weight: normal
`

export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px

  @media (max-width:991px) {
    font-size: 30px
  }
`

export const InfoDesc = styled.p`
  color: #fff;
  margin-bottom: 15px;
  line-height: 1.8
`

export const InfoDescAnchor = styled.a`
  text-decoration: none
`


