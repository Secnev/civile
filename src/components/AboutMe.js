import UNCCLogo from '../images/NewUNCClogo.png';
import CivilE2 from '../images/Civil_E_Logo2.png'
import React from 'react';

function About () {

    return(
        <div id="about-section"> 
                
                
                <div id="about" className="about-paragraph">
                  
                    <div className='about-ce'>
                        <h2 id='about-txt'> ABOUT CIVIL-E</h2>
                        <p>
                         Welcome to my site! I made this website as a way of keeping my engineer knowledge sharp and learning more about programming/web developing.
                         My hope is that someone can find this site useful in some way and I can make the journey to becoming a civil engineer more enjoyable.

                        </p>
                        <p>
                            I hope you enjoy the site!
                        </p>
                    </div>
                </div>
               
                <div id="about" className="about-paragraph">
      

                    <div className='about-me'>
                        <h2 id='about-txt'> ABOUT ME</h2>
                        <p>
                            My name is David and i'm currently a structural engineer (EIT).
                            I graduated from the University of North Carolina at Charotte with a B.S. in Civil Engineering.
                            I'll be continuing my education at NC State University Spring 2022 to persue a Masters Degree in Civil Engineering.
                            Web development has always been an interest for me and this year (2020...) I decided it was time to learn more
                            about it and start project that I care about. As I learn more I hope I can improve this site and make it event
                            more useful.
                        </p>
                    </div>

                         
                </div>
        </div>
    );
}

export default About;