import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {EventContext} from "../eventDrinks/EventDrinkProvider"


export const Home = (props) => {
    const {addEvent} = useContext(EventContext)

    return(
        <section>
        <h1>Home Page</h1>
        <div><button id="edit--profile"> 
        <Link to="/edit-profile">Edit Profile</Link>
        </button></div>
        <div><button onClick={addEvent} id="start--drinking"> Start Drinking</button></div>
        </section>

    )
}