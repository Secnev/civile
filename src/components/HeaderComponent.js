import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Header extends Component {

    render() {
     return (
         <>
         <div className="menu-container">
            
            <div id="menu-title">MENU</div>
           <a type="button" className="toggle-button">
               <span className="bar"></span>
               <span className="bar"></span>
               <span className="bar"></span>
            </a>
        </div>
            <div id="button-container">
                        <div id="btn-group">
                            <a id="btn" type="button"> <Link to="/home">HOME</Link></a>
                            <a id="btn" type="button" href="#about">ABOUT</a>
                            <a id="btn" type="button"><Link to="/resources">RESOURCES</Link></a>
                            <a id="btn" type="button" href="#about-section">TOOLS</a>
                            <a id="btn" type="button" href="#connect-section">CONTACT</a>
                        </div>

                    </div>
       
        </>
     );
       
    }
}

export default Header;