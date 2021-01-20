import UNCCLogo from '../images/NewUNCClogo.png';
import CivilE2 from '../images/Civil_E_Logo2.png'
import React from 'react';

function About () {

    return(
        <div id="about-section"> 
                
                
                <div id="about" className="about-paragraph">
                  
                    <div className='about-sec'>
                        <h2 id='about-txt'> ABOUT CIVIL-E</h2>
                        <p>
                            Welcome to my site! I made this website as a way to merge my two passions: engineering and web development. 
                            As I was searching for a project that I could be motivated about I realized that I could make a website that
                            I would have found useful while still in college. In todays world it can be overwhelming trying to find learning
                            resources. I plan on sharing what resources I found useful in college and others that I discovered during my 
                            professional day to day.

                        </p>
                        <p>
                            I hope you enjoy the site!
                        </p>
                    </div>
                </div>
               
                <div id="about" className="about-paragraph">
      

                    <div className='about-sec'>
                        <h2 id='about-txt'> ABOUT ME</h2>
                        <p>
                            My name is David and i'm currently a structural engineer (EIT).
                            I graduated from the University of North Carolina at Charotte with a B.S. in Civil Engineering.
                            I'll be attending NC State University Spring 2022 to persue a Masters Degree in Civil Engineering.
                            Web development has always been an interest for me and this year (2020...) I decided to give it a real
                            go. As I learn more development tools and languages I hope to expand what this site can do. 
                        </p>
                    </div>

                         
                </div>
        </div>
    );
}

export default About;