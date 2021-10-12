import React, { useContext } from 'react'
import { Card } from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'
import'./MeetupItem.css'
export const MeetupItem = ({meetup}) => {
const fav_Context = useContext(FavoritesContext)
  const itemIsFavorite=fav_Context.itemIsFavorite(meetup.id)
    function toggleFavStataHandler(){
        if(itemIsFavorite){
            fav_Context.removeFavorite(meetup.id)
        }else{
            fav_Context.addFavorite(meetup)
        }

    }
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
            <button onClick={toggleFavStataHandler}>{itemIsFavorite?"remove from Favorites":"To Favorites"}</button>
                {/* <button>To Favorites</button> */}
            </div>
            </li>
            </Card>
        </div>
       
    )
}
