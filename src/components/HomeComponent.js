import structuralImg from '../images/pexels-igor-starkov-1117452.jpg';
import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';



function Home(props) {
    return (

                <div id="main-sections"> 
                    <div id='main-title'>
                        <h1 id="main-txt">Civil Engineering Tools for Students</h1>
                        <p id="sub-txt">Useful resources and tools for future civil engineers</p>
                        <Link to='/path'><Button id='main-btn'>Start Civil Engineering Path</Button></Link>
                    </div>                  

                </div>

   

    );
}

export default Home;   