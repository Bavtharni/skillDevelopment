import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../images/h1.jpg')} style={{height: "68px"}} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/Products' activeStyle>
            PRODUCTS
          </NavLink>
          <NavLink to='/PolmanRevolution' activeStyle>
            POLMAN REVOLUTION
          </NavLink>
          <NavLink to='/Careers' activeStyle>
            CAREER
          </NavLink>
          <NavLink to='/About' activeStyle>
            ABOUT
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            CONTACT
          </NavLink>
        
          <Dropdown as={ButtonGroup}>

            <label htmlFor="dropdown-split-basic">
            <FeatherIcon icon="globe" className="globe-icon"/>
            </label>
            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item >German</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;