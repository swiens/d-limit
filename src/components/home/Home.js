import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../eventDrinks/EventDrinkProvider";

export const Home = (props) => {
  const { addEvent } = useContext(EventContext);

  const currentEventId = localStorage.getItem("currentEvent");

  const startDrinking = () => {
    addEvent().then((newEvent) => {
      return props.history.push(`/drinking/${newEvent.id}`);
    });
  };

  const continueDrinking = () => {
      return props.history.push(`/drinking/${currentEventId}`);
  };

  
  console.log(currentEventId);
  return (
    <section>
      <h1>Home Page</h1>
      <div>
        <button id="edit--profile">
          <Link to="/edit-profile">Edit Profile</Link>
        </button>
      </div>
      <div>
        {currentEventId && (
          <button onClick={continueDrinking} id="continue--drinking">
            Continue Drinking
          </button>
        )}

        {!currentEventId && (
          <button onClick={startDrinking} id="start--drinking">
            Start Drinking
          </button>
        )}
      </div>
    </section>
  );
};
