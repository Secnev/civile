import React, { Component }  from 'react';
import {Link} from 'react-router-dom';



class Footer extends Component {

    render() {
        return (
            <footer className="page-footer font-small blue pt-4">


            <div className="container-fluid text-center">
           

            
           
             <div className="row">

                 <div className="col-6 col-md-4">
           

                     <div className="site-container" id="footer-titles">SITE</div>
           
                     <ul className="list-unstyled">
                     <li>
                         <Link to="/home" href="#main-sections"><a href="#main-sections">HOME</a></Link>
                     </li>
                     <li>
                        <Link to="/resources"> RESOURCES</Link>
                     </li>
                     <li>
                         <Link to="/contact">CONTACT</Link>
                     </li>
                     </ul>
                 </div>
           
             

                 <div className="col-6 col-md-4">
           

                     <div className="site-container"id="footer-titles">SOCIAL</div>
           
                     <ul  className="list-unstyled">
                     <li>
                         <a href="#" target="_blank">LinkedIn</a>
                     </li>
                     <li>
                         <a  href="#" target="_blank">Twitter</a>
                     </li>
                     </ul>
           
                 </div>

           
                 
             </div>

           
           </div>

           

             <div className="footer-copyright text-center py-3">© 2021 Copyright:
               <a id="footer-titles" href="#"> DavidVences.com</a>
             </div>

           
           </footer>

        );
    }
}

export default Footer;