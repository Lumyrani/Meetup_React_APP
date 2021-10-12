import React from 'react'
import { useHistory } from 'react-router'
import { NewMeetupForm } from '../components/meetup/NewMeetupForm'

export const NewMeetup = () => {
   const history=useHistory()


 const onAdd =(meetupData)=>{
     fetch("https://meetups-28f9a-default-rtdb.firebaseio.com/meetup.json",{
         method:"post",
         body:JSON.stringify(meetupData),
         headers:{
             "Content-Type":"application/json"
            }
     }).then(()=>{
history.replace("/")

     })
 }



    return (
        <div>
            
            <h1>NewMeetup </h1>
            <NewMeetupForm onAdd={onAdd}/>
            
        </div>
    )
}
