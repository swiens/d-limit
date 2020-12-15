import React, {useContext,useEffect, useRef} from "react"
import {EventContext} from "../eventDrinks/EventDrinkProvider"


export const DrinkingPage = () => {
    const {addEventDrinks, drinks, getDrinks} = useContext(EventContext)

    const drink = useRef(null)

    useEffect(() => {
        getDrinks()
    }, [])
// i need to get an event id
    const eventDrink = () => {
         const drinkId = parseInt(drink.current.value)

        return console.log(drinkId,"CHECK")
    }
    return(
    
        <section>
        <h1>What are you drinking?</h1> 
        {
            drinks.map(d => (
                <div>
                <button onClick={event => console.log(event)} key={d.id} ref={drink} value={d.id} id={d.id}>
                    {d.type}
                </button>
                </div>
            ))

        }
        </section>
    )
}
//render() {
  //  return(
    //  <button ref={refContainer}>
      //  Press Me
//       </button>
//     );
//   }