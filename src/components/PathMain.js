import React, { Component } from 'react';
import AboutResources from './AboutResources';
import Introduction from './Introduction';
import Freshman from './FreshmanYear';
import Sophomore from './SophomoreYear';

class PathMain extends Component {
    

    render() {

        return (
            <div className = 'resource-main' style={{marginTop: 25}}> 
                <div>
                    <h2>Path for Civil Engineers</h2>
                </div>
              <AboutResources />
              <Introduction />
              <Freshman />
              <Sophomore />
               
            </div>
        );
    };
}

export default PathMain;