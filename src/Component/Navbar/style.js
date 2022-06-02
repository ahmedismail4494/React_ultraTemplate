/*
    ===============================
            Navbar Styles
    ===============================
*/

import {Link} from 'react-router-dom';
import styled from "styled-components";

export const Navbar_El = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 99;
`;

export const NavbarSection = styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 8px 6px -6px black;
`;

export const Logo = styled.div`
  width: 50%;
  float: left;

  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const Logo_text = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const Ul_list = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;

    @media(max - width : 991px) {
        width: 100 %;
        float: none;
        margin - top: 20px;
        display: none
      }
`;

export const List_item = styled.li`
    display: inline-block;
    
    @media(max - width : 991px) {
        display: block;
        text - align: center;
      }  
`;

export const Anchor = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;

export const NavItem = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover{
      color: #eb5424
  }
`