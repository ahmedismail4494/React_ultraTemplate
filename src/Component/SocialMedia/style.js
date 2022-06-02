
/*
    ===============================
            Socail Styles
    ===============================
*/


import styled from "styled-components";



export const Social_media = styled.div`
  height: auto;
  overflow: hidden;
`

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;

  background: ${props => props.type == 1 ? "#3b5998" : ""};
  background: ${props => props.type == 2 ? "#498cbf" : ""};
  background: ${props => props.type == 3 ? "#cc2127" : ""};

  @media (max-width:991px) {
    width: 100%;
    float: none;
  }
`

export const Social_icon = styled.i`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  float: left;
  margin-right: 10px;
`

export const Social_p = styled.p` 
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`

export const Social_span = styled.span` 
  display: block;
  margin-bottom: 8px;

  font-weight: ${ props => props.kind == "info2" ? "normal":"" } 
`



