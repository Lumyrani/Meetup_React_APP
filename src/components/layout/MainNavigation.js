import React from 'react'
import {Link} from 'react-router-dom'
import"./MainNavigation.css"

export const MainNavigation = () => {
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
            </ul>
        </nav>
        </header>
    )
}
