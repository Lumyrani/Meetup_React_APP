import React from 'react'
import { Card } from '../ui/Card'
import './NewMeetupForm.css'
import { useRef } from 'react'


export const NewMeetupForm = () => {
    const submitHandler=(event)=>{
        event.preventDefault()

        // const titleInputRef = useRef()
        // const imageInputRef = useRef()
        // const addressInputRef = useRef()
        // const descriptionInputRef = useRef()
        // const enteredtitle = titleInputRef.current.value
        // const enteredimage = imageInputRef .current.value
        // const enteredaddress = addressInputRef .current.value
        // const entereddescription = descriptionInputRef .current.value

    }
    return (
        <div>
            <Card>
                <form className="form" onSubmit={submitHandler}> 

                    <div className="control">
                        <label>Meetup Title</label>
                        <input type= "text" required  id ="title" 
                        // ref ={titleinputRef} 
                        />
                    </div>

                    <div className="control">
                        <label>Meetup Image</label>
                        <input type= "url" required  id ="image" 
                        // ref={imageInputRef}
                        />
                    </div>

                    <div className="control">
                        <label>Meetup Address</label>
                        <input type= "text" required  id ="address" 
                        // ref={addressInputRef}
                        />
                    </div>

                    <div className="control">
                        <label>Meetup Description</label>
                        <textarea  required  id ="description"
                        //  ref={descriptionInputRef } 
                         row ="5">
                      </textarea>
                    </div>
                    <div className="actions">
    
                     <button>Add Meetup</button>
                    </div>


                </form>
            </Card>
            
        </div>
    )
}
