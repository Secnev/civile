import React, { Component } from 'react';
import ResourcesHeader from './ResourcesHeader';
import ResourcesHome from './ResourcesHome';
import Calculus from './CalculusResources';
import { Switch, Route, Redirect } from 'react-router-dom';

class ResourcesMain extends Component {
    

    render() {

        const ResourcesHomePage = () => {
            return (
                <ResourcesHome />
            );
        };
        
        return (
            <div>
                <ResourcesHeader />
                <Switch>
                    <Route exact path='/resources' component={ResourcesHomePage} />
                    <Route path='/resources/calculus'><Calculus/></Route>
                </Switch>
               
            </div>
        );
    };
}

export default ResourcesMain;