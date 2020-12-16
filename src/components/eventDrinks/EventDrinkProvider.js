import React, { useState } from "react";

export const EventContext = React.createContext();

export const EventDrinkProvider = (props) => {
  const [eventDrinks, setEventDrinks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const getEventDrinks = (eventId) => {
    return fetch(`http://localhost:8088/eventDrinks?eventId=${eventId}`)
      .then((res) => res.json())
      .then(setEventDrinks);
  };
  const getDrinks = () => {
    return fetch("http://localhost:8088/drinks")
      .then((res) => res.json())
      .then(setDrinks);
  };
  const addEvent = () => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: parseInt(localStorage.getItem("app_user_id")),
        startTime: Date.now(),
        endTime: null,
      }),
    }).then((res) => res.json())
      .then((event) => {
        localStorage.setItem("currentEvent",event.id)
        return event 
      })
    
  };

  const addEventDrink = (drink) => {
    return fetch("http://localhost:8088/eventDrinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(drink),
    }).then(getEventDrinks);
  };

  const deleteEventDrink = (eventDrinkId, eventId) => {
    return fetch(`http://localhost:8088/eventDrinks/${eventDrinkId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getEventDrinks(eventId));
  };

  return (
    <EventContext.Provider
      value={{
        addEvent,
        eventDrinks,
        getEventDrinks,
        addEventDrink,
        getDrinks,
        drinks,
        deleteEventDrink
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
