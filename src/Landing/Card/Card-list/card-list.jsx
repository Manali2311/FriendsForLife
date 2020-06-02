import React from 'react';
import './card-list.css';
import {Card} from '../Card-component/card-component';

function CardList(p){
return(
    <div className="card-list">
        {
            p.Friends.map(fri =>(
            <Card key={fri.id} Friends={fri} />
            ))
        }
    </div>
)
}
export default CardList;