
/*
    ===============================
       Profile + Skills Styles
    ===============================
*/

import styled from "styled-components";

export const Profile_Skills = styled.div`
  padding: 50px 0;
  overflow: hidden;
`

export const Profile_el = styled.div`
  width: 50%;
  float: left;

  @media (max-width:768px) {
        width: 100%;
        float: none;
        margin-bottom: 20px;
  }
`

export const Profile_title = styled.h2`
  font-size: 40px; 
  margin-bottom: 20px
`

 export const Profile_list = styled.ul`
  list-style: none
`

export const Profile_item = styled.li`
  margin-bottom: 8px
`

export const Profile_span = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold

  font-weight: ${props => props.web ? "normal" : "" }  ;
  color: ${ props => props.web ? " #eb5424" : "" };
`

export const Skills_el = styled.div`
  width: 50%;
  float: left;

  @media (max-width:768px) {
    .profile_skills .skills {
        width: 100%;
        float: none
  }
`

export const Skills_title = styled.h2`
  font-size: 40px; 
  margin-bottom: 20px
`

export const Skills_desc = styled.p` 
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px
`

export const Skills_bar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px
`

export const Bar_title = styled.span`
  float: left;
`

export const Bar_perc = styled.span`
  float: right;
  margin-right: 100px
`

export const Bar_parent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px
`

export const Bar_parent_span = styled.span`
  height: 2px;
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  
 
  width: ${ props => props.sp == 1 ? '100%' : '' };
  width: ${ props => props.sp == 2 ? "90%" : '' };
  width: ${ props => props.sp == 3 ? '80%' : '' };
`

export const Title_span = styled.span`
  font-weight: normal;
`

