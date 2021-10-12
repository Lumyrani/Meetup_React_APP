import React from 'react'
import {Link} from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context'
import"./MainNavigation.css"
import { useContext } from 'react'


export const MainNavigation = () => {
    const context = useContext(FavoritesContext)
    return (
        <header className="header">
        <div className="heading">
            Meetup App
        </div>
        <nav>
            <ul>
                <li> <Link to ="/">All Meetups</Link></li>
                <li> <Link to ="/new-meetup">New Meetup</Link></li>
                <li> <Link to ="/favorites">Favorite</Link></li>
                <span className="badge">{context.totalFavorites}</span>
            </ul>
        </nav>
        </header>
    )
}
