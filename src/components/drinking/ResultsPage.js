import React, {useContext,useEffect, useRef} from "react"
import {EventContext} from "../eventDrinks/EventDrinkProvider"
import moment from "moment"


export const ResultsPage = (props) => {
    const {getDrinks,endEvent} = useContext(EventContext)

    const eventId = parseInt(props.match.params.eventId)
    useEffect(() => {
        getDrinks()
    }, [])

    const endEventButton = () => {
        endEvent(eventId)
        .then(() => {
            return props.history.push("/")
        })
    
    }

    return(
    
        <section>
        <h1>Results</h1> 
        <button onClick={endEventButton}>End Event</button>
        </section>
    )
}
