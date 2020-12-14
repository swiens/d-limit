import React, { useState, useEffect } from "react"

export const ContactContext = React.createContext()

export const ContactProvider = (props) => {
    const [user, setUser] = useState([])
    const [contacts, setContacts] = useState([])
    const [currentContact, setCurrentContact] = useState([])

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

    const editContact = contact => {
        return fetch(`http://localhost:8088/contacts/${contact.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
    }

    const getContact = contactId => {
        return fetch(`http://localhost:8088/contacts/${contactId}`) 
            .then(res => res.json())
            .then(setCurrentContact)
        
    }

    return(
        <ContactContext.Provider value={{
            contacts, addContact, getContacts, editContact, currentContact, getContact, setCurrentContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}