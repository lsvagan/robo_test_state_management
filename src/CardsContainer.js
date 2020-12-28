import React from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = ({robots}) => {
    let robotsList = robots.map((robo) => {
        return (<Card 
                    key = {robo.id}
                    id = { robo.id }
                    name = { robo.name }
                    email = { robo.email }
                />)
    })
    return (
                <div className="cardsContainer">
                    {robotsList}
                </div>
                
            );
}
 
export default CardsContainer;