import React from 'react'
import { Card } from '../ui/Card'
import'./MeetupItem.css'
export const MeetupItem = ({meetup}) => {
    return (
      
        <div>
             <Card>
                 
            <li className="item">
            <div className="image">
                <img src ={meetup.image} alt ="" />
            </div>
            <div className="content">
                <h3>{meetup.title}</h3>
                <address>{meetup.address}</address>
                <p>{meetup.description}</p>

            </div>
            <div className="actions">
                <button>To Favorites</button>
            </div>
            </li>
            </Card>
        </div>
       
    )
}
