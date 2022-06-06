import {Link} from "react-router-dom";
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './style.js';





 function Navbar (){
  return( 
    <div> 
        <NavbarSection>  
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem className="list-item"><Link to='/' className='navlink' >Home</Link></ListItem>
                    <ListItem className="list-item"><Anchor href="#work">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#portfolio">Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#resume">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#about">About</Anchor></ListItem>
                    <ListItem className="list-item"><Link to='/Contact' className='navlink' >Contact</Link></ListItem>
                </UlList>
                
            </div> 
        </NavbarSection>  
    </div>
  );
}

 export default Navbar;