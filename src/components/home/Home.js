import React from "react"
import {Link} from "react-router-dom"

export const Home = () => {
    return(
        <section>
        <h1>Home Page</h1>
        <div><button id="edit--profile"> 
        <Link to="/edit-profile">Edit Profile</Link>
        </button></div>
        <div><button id="start--drinking"> Start Drinking</button></div>
        </section>

    )
}