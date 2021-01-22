
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id='navbar-style' color="dark" dark expand="md">
        <NavbarBrand id='navbar-title' href="/">Civil-E</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/path">Path</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tools
              </DropdownToggle>
              <DropdownMenu right>
                
                  <Link to='/tools'><DropdownItem>Interpolation</DropdownItem></Link>
                
                <DropdownItem divider/>
                <DropdownItem>
                  Beam Calculations
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  Column Calculations
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


