import React, { useState, useEffect } from "react"

export const ContactContext = React.createContext()

export const ContactProvider = (props) => {
    const [contacts, setContacts] = useState([])

    const getContacts = () => {
        return fetch("http://localhost:8088/contacts")
            .then(res => res.json())
            .then(setContacts)
    }
    const addContact = contact => {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
    }
    return(
        <ContactContext.Provider value={{
            contacts, addContact, getContacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}