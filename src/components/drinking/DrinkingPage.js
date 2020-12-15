import React, {useContext,useEffect, useRef} from "react"
import {EventContext} from "../eventDrinks/EventDrinkProvider"


export const DrinkingPage = (props) => {
    const {addEventDrink, drinks, getDrinks} = useContext(EventContext)

    const drink = useRef(null)

    useEffect(() => {
        getDrinks()
    }, [])
// i need to get an event id
    const eventDrink = (event) => {
        const drinkId = parseInt(event.target.id)
        const eventId = parseInt(props.match.params.eventId)
        const newEventDrink = {
            drinkId: drinkId,
            eventId: eventId,
            timeDrank: Date.now() 
        }
        addEventDrink(newEventDrink)
    
    }

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
        <button>Can I drive?</button>
        </section>
    )
}
