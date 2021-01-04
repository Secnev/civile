import React from 'react';

import civileLogo from '../images/Civil_E_Logo.png';


function Home(props) {
    return (
        <>
            <div id="main-sections">

                <div id="main-title"> 
                    <div>
                        <img className="mainImage" src={civileLogo}/>
                    </div>

                    

                </div>

            </div>
            <div id="about-section"> 
                
                <h2> ABOUT CIVIL-E</h2>
                <section id="about" className="about-paragraph">
                    <p>Welcome to my site! My name is David and I am currently a stuctural engineer (EIT).
                    I made this website as a way to combine my two passions: engineering and web development.
                    I hope to be able to provide students with some useful tools and resources.
                    I plan on working on this website periodically to add more and more features. 
                    </p>
                    <p>
                        Enjoy the site!
                    </p>
                </section>
           </div>
        </>
   

    );
}

export default Home;   