import React from "react"

export const EventContext = React.createContext()

export const EventDrinkProvider = (props) => {
    const addEvent = () => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: parseInt(localStorage.getItem("app_user_id")),
                startTime: Date.now(),
                endTime: null,
                
            })
            
        })
    }
    
    return(
        <EventContext.Provider value={{
            addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}