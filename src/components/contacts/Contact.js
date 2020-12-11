import React from "react"
import "./Contact.css"

export const Contact = ({contact}) => (
    <section className="contact">
        <h3 className="contact__name">{contact.name}</h3>
        <div className="employee__phoneNumber">{employee.phoneNumber}</div>
    </section>
)