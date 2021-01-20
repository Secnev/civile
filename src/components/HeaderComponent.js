import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Header = (props) => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);


  

  return (
    <div>
      <Nav id="tools-nav" tabs>
      <NavItem>
            <Link to='/home'> <NavLink >Home</NavLink></Link>
        </NavItem>

        <NavItem>
            <Link to='/about'> <NavLink >About</NavLink></Link>
        </NavItem>

        <Dropdown nav isOpen={dropdownOpen1} toggle={toggle1}>
          <DropdownToggle nav caret>
            Tools
          </DropdownToggle>
          <DropdownMenu>
          <Link to='/tools'><DropdownItem>Interpolation Calculator</DropdownItem></Link>
            <DropdownItem divider />
            <DropdownItem>Gaussian Elimination</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavItem>
          <NavLink ><Link to='/path'> Path</Link></NavLink>
        </NavItem>
       

       
    </Nav>
    </div>
  );
}

export default Header;


