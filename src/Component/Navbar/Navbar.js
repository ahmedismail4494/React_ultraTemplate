import React from 'react';

import {Navbar_El, NavbarSection, Logo, Logo_text, Ul_list, List_item, Anchor, NavItem  } from './style.js';



function Navbar () {
  return (
    <Navbar_El>
    <NavbarSection>
        
        <div className="container">
            
            <Logo>
                <Logo_text className="logo-text">Ultra Profile</Logo_text>
            </Logo>
            
            <Ul_list>
                <List_item> <NavItem exact to="/" >Home </NavItem> </List_item>
                <List_item> <NavItem exact to="/React_ultraTemplate" >Home </NavItem> </List_item>
                <List_item> <Anchor href="#Work">Work</Anchor> </List_item>
                <List_item> <Anchor href="#Portfolio">Portfolio</Anchor> </List_item>
                <List_item> <Anchor href="#Profile">Profile</Anchor> </List_item>
                <List_item> <Anchor href="#About">About</Anchor> </List_item>
                <List_item> <NavItem exact to="/Contact" > Contact </NavItem> </List_item>
            </Ul_list>
            
        </div>
        
    </NavbarSection>
    </Navbar_El>
  );
}

export default Navbar;
