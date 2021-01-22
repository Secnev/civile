import React, { Component } from 'react';
import { PATHCARDS } from '../shared/pathArray';

class PathMain extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            pathCards: PATHCARDS
        }
    }

    render() {

        const Cards = this.state.pathCards.map( pathCard => {
            let titles = pathCard.titles.map (title => <li>{title}</li>)
            return (
                
                <div id="path-card"> 
                    <h2>{pathCard.name}</h2>
                    <ol>
                        <a>{titles}</a>
                    </ol>
                </div>
                
                
            );
    
        });

        return (
            <div style={{marginTop: 25}}> 
                {Cards}   
            </div>

        );

        
    };
}

export default PathMain;