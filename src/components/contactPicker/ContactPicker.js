import React from "react";

export const ContactPicker = ({ contact, contacts, setContact }) => {

    const handleSelect = (e) => {
        const contact = e.target.value;
        if(contact !== "") {
            setContact(contact);
            document.getElementById("contactError").style.display = 'none';
        } else {
            document.getElementById("contactError").style.display = 'block';
            setContact('');
        }
    }
    return (
        <select onChange={handleSelect} value={contact} >
            <option value="">Choose contact</option>
            { contacts.map(contact => {
                return <option key={contact.name} value={contact.name}>{contact.name}</option>
            })}
        </select>
    );
};