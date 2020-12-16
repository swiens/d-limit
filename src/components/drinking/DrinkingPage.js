import React, {useContext,useEffect, useRef} from "react"
import {EventContext} from "../eventDrinks/EventDrinkProvider"
import moment from "moment"


export const DrinkingPage = (props) => {
    const {addEventDrink, drinks, getDrinks} = useContext(EventContext)

    const drink = useRef(null)
    const eventId = parseInt(props.match.params.eventId)
    useEffect(() => {
        getDrinks()
    }, [])
// i need to get an event id
    const eventDrink = (event) => {
        const drinkId = parseInt(event.target.id)
        
        const newEventDrink = {
            drinkId: drinkId,
            eventId: eventId,
            timeDrank: moment.now() 
        }
        addEventDrink(newEventDrink)
    
    }

    const editDrinks = () => {
        return props.history.push(`/drinking/drinks/${eventId}`);
    };

    const canIDriveButton = () => {
        return props.history.push(`/drinking/results/${eventId}`);
    };

    return(
    
        <section>
        <h1>What are you drinking?</h1> 
        {
            drinks.map(d => (
                <div>
                <button onClick={eventDrink} key={d.id} ref={drink} value={d.id} id={d.id}>
                    {d.type}
                </button>
                </div>
            ))

        }
        <button onClick={canIDriveButton}>Can I drive?</button>
        <button onClick={editDrinks}>View/Edit Drinks</button>
        </section>
    )
}
