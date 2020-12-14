import React from "react"

export const DrinkingPage = () => {
    return(
        <section>
        <h1>What are you drinking?</h1>
        <div><button onClick={addEvent} id="start--drinking"> Low Gravity Beer</button></div>
        <div><button onClick={addEvent} id="start--drinking"> High Gravity Beer</button></div>
        <div><button onClick={addEvent} id="start--drinking"> Liquor</button></div>
        <div><button onClick={addEvent} id="start--drinking"> Wine</button></div>
        </section>
    )
}