import React from 'react';
import "./card.css";
import 'react-bootstrap';

export const Card =(p) =>(
    <div className="card-compo card">
 <div className="gradient-cover"></div>
    <img className="imggvalue card-img-top" src={p.Friends.imgurl} alt="img" height={p.Friends.height}/>
 <div className="detail-text card-body">
 <i className="name card-title">{p.Friends.name}</i>
 <p className="mail card-text">{p.Friends.email}</p> 
 </div>
 </div>
)
