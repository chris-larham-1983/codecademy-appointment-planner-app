import React from "react";

export const ContactForm = (props) => {

    const handleNameChange = (e) => {
        const currentName = e.target.value;
        props.setCurrentName(currentName);
    };

    const handleNumberChange = (e) => {
        const phoneNumber = e.target.value;
        props.setPhoneNumber(phoneNumber);
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        props.setEmail(email);
    };

    const labelStyles = {
        color: 'darkgreen',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor='name' style={labelStyles}>Enter Contact Name</label>
            <input type='text'
                   id='name'
                   onChange={handleNameChange}
                   value={props.currentName}
                   placeholder='Enter contact name'
                   required />
            <p id="duplicateName">Duplicate name: contact is already present in contacts list.</p>
            <label htmlFor='phoneNumber' style={labelStyles}>Enter Contact Phone Number (in the format indicated)</label>
            <input type='tel'
                   id='phoneNumber'
                   onChange={handleNumberChange}
                   value={props.phoneNumber}
                   pattern='^[2-9]\d{2}-\d{3}-\d{4}$'
                   placeholder='211-123-1234'
                   required />
            <label htmlFor='email' style={labelStyles}>Enter Contact Email</label>
            <input type='email'
                   id='email'
                   onChange={handleEmailChange}
                   value={props.email}
                   placeholder='Enter contact email'
                   required />
            <input type='submit'
                   value='Add Contact' />
        </form>
    );
}