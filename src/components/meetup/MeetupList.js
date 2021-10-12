import React from 'react'
import { MeetupItem } from './MeetupItem'
import './MeetupList.css'

export const MeetupList = ({meetuplist}) => {


    return (
        <ul className="list">
            {
                meetuplist.map((meetup)=>
                    <MeetupItem key={meetup.id}meetup ={meetup} />)
                }
            
            </ul>
    )
}
