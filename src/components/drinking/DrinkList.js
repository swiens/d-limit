import React from "react";
import { useContext, useEffect } from "react";
import { EventContext } from "../eventDrinks/EventDrinkProvider";
import moment from "moment";

export const DrinkList = (props) => {
  const { getEventDrinks, eventDrinks, getDrinks, drinks, deleteEventDrink } = useContext(
    EventContext
  );

  const eventId = parseInt(props.match.params.eventId);

  useEffect(() => {
    getEventDrinks(eventId);
    getDrinks();
  }, []);

  const deleteDrinkButton = (event) => {
    const id = event.target.id 
    deleteEventDrink(id, eventId)
  }


  if (drinks.length === 0) return false;
  return (
    <div>
      Drink List

      <div className="drinks">
        {eventDrinks.map((currentEventDrink) => {
          const foundDrink = drinks.find((currentDrink) => {
            return currentDrink.id === currentEventDrink.drinkId;
          });
          return (
            <div>
              <hr /> 
              <div>{foundDrink.type} </div>
              <div> {moment(parseInt(currentEventDrink.timeDrank)).format("LTS")} </div>
              <button onClick={deleteDrinkButton} id={currentEventDrink.id}>Delete Drink </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
