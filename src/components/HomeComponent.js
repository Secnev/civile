import structuralImg from '../images/pexels-igor-starkov-1117452.jpg';
import React from 'react';



function Home(props) {
    return (
        <>
        
            <div id="main-sections">
                <img className="main-background" src={structuralImg} />
                <div id="main-title"> 
                    <h1 id="main-txt">Civil Engineering Tools for Students</h1>                  

                </div>

            </div>
        </>
   

    );
}

export default Home;   