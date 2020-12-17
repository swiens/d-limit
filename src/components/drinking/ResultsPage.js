import React, { useContext, useEffect, useRef, useState } from "react";
import { EventContext } from "../eventDrinks/EventDrinkProvider";
import moment from "moment";
import { UserContext } from "../user/UserProvider";

export const ResultsPage = (props) => {
  const { endEvent, getEventDrinks, eventDrinks, event, getEvent } = useContext(
    EventContext
  );
  const { user, getUser } = useContext(UserContext);
  const [result, setResult] = useState(0)
  const eventId = parseInt(props.match.params.eventId);

  useEffect(() => {
    getUser().then(
      getEvent().then(
        getEventDrinks(eventId).then(() => {
          console.log(user);
          console.log(event);
          console.log(eventDrinks);
          //this is where i will do my calculations
          // get hours since event started 
          const bodyWeightInGrams = user.weight * 454
          const alcoholConsumedInGrams = eventDrinks.length * 14
          const gender = 0.55
          const BAC = (alcoholConsumedInGrams / (bodyWeightInGrams * gender))  * 100
          setResult(BAC)
          console.log(BAC)

        })
      )
    );
  }, []);

  const endEventButton = () => {
    endEvent(eventId).then(() => {
      return props.history.push("/");
    });
  };

  const continueDrinkingButton = () => {
    return props.history.push(`/drinking/${eventId}`);
  };

  if(result<0.08) {
      return(
        <section>
        <h1>Results</h1>
        <h2>You are good to drive</h2>
        <button onClick={continueDrinkingButton}>Continue Drinking</button>
        <button onClick={endEventButton}>End Event</button>
      </section>
      )

  }
  else {
    return (
        <section>
          <h1>Results</h1>
          <h2> You Can't drive</h2>
          <button onClick={continueDrinkingButton}>Continue Drinking</button>
          <button onClick={endEventButton}>End Event</button>
        </section>
      );
  }
  
};
