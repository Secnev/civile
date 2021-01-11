import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const ResourcesHeader = (props) => {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [dropdownOpen4, setDropdownOpen4] = useState(false);

    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
    const toggle3 = () => setDropdownOpen3(!dropdownOpen3);
    const toggle4 = () => setDropdownOpen4(!dropdownOpen4);

  

  return (
    <div>
     
      <Nav id="resources-nav" tabs>
  
        <Dropdown nav isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle nav caret>
                Math
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem><Link to='/resources/calculus'>Calculus</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Linear Algebra</DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <Dropdown nav isOpen={dropdownOpen2} toggle={toggle2}>
            <DropdownToggle nav caret>
                Physics
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Physics 1</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Physics 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Dynamics</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Hydraulics</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown nav isOpen={dropdownOpen3} toggle={toggle3}>
            <DropdownToggle nav caret>
                Civil Engineering
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Structures</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Geotech</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Concrete</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Steel</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown nav isOpen={dropdownOpen4} toggle={toggle4}>
                <DropdownToggle nav caret>
                    Professional Development
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Licensure Info</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>FE Exam</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>PE Exam</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    </Nav>
    </div>
  );
}

export default ResourcesHeader;