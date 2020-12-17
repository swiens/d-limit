import React from "react"
import moment from "moment"

export const Event = ({ event }) => (
    <section className="event">
        <div className="event__date">{moment(parseInt(event.startTime)).format("ll")}</div>
    </section>
)