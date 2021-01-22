import AboutResources from './AboutResources';
import PathMain from './CardPrint';
import React from 'react';



function PathHome(props) {
    return (
        <>
            <div className='resource-main'>

                <h2 id='about-txt'>Path for Civil Engineers</h2>

                <AboutResources />
                <PathMain />
            </div>
        </>
   

    );
}

export default PathHome;   