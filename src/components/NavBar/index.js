import React from 'react';
import{Nav, NavLink, Bars, NavMenu} from './NavBarElements'


const NavBar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
                  <h1 id= "logo"> HAVENCTUARY</h1>
                  <br></br>
                  <h5 id = "logo1"> for south asians</h5>
              </NavLink>
              <Bars />

              <NavMenu>
                  <NavLink to="/" activeStyle>
                    Welcome
                   </NavLink>
        
                  <NavLink to="/find-therapists" activeStyle>
                   Search 
                   Therapists
                  </NavLink>
                  <NavLink to="/awareness" activeStyle>
                    Awareness
                  </NavLink>
                  <NavLink to="/diary" activeStyle>
                    Diary
                  </NavLink>
                  <NavLink to="/quotes" activeStyle>
                      Quotes
                  </NavLink>
              </NavMenu>
              
          </Nav> 
        </>
    )
}

export default NavBar
