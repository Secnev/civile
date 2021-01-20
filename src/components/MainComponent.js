import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import About from './AboutMe';
import PathMain from './PathMain';
import Tools from './ToolsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about'><About/></Route>
                    <Route path='/path'><PathMain/></Route>
                    <Route path='/tools'><Tools /></Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
               
            </div>
        );
    };
}

export default Main;