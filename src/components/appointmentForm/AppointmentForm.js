import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
                                    contacts,
                                    title,
                                    setTitle,
                                    contact,
                                    setContact,
                                    date,
                                    setDate,
                                    time,
                                    setTime,
                                    handleSubmit
                                }) => {

    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const today = getTodayString();

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setTitle(title);
    }

    const handleDateChange = (e) => {
        const date = e.target.value;
        setDate(date);
    }

    const handleTimeChange = (e) => {
        const time = e.target.value;
        setTime(time);
    }

    const labelStyles = {
        color: 'darkgreen',
        fontWeight: 'bold'
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title' style={labelStyles}>Enter a unique appointment title</label>
            <input type='text'
                   id='title'
                   onChange={handleTitleChange}
                   value={title}
                   placeholder="Enter a unique appointment title"
                   required />
            <p id="duplicateTitle">Duplicate title: appointment title is already present in appointments list.</p>
            <label htmlFor='date' style={labelStyles}>Specify appointment date</label>
            <input type='date'
                   id='date'
                   onChange={handleDateChange}
                   value={date}
                   placeholder="Select appointment date"
                   min={today}
                   required />
            <label htmlFor='time' style={labelStyles}>Specify appointment time</label>
            <input type='time'
                   id='time'
                   onChange={handleTimeChange}
                   value={time}
                   placeholder="Select appointment time"
                   required />
            <label htmlFor='contact' style={labelStyles}>Select a contact</label>
            <ContactPicker contact={contact}
                           contacts={contacts}
                           setContact={setContact}
                           id='contact' />
            <p id="contactError"
               style={{display:'none', fontSize: '1.4em', color:'red'}}>You must select a valid contact.</p>
            <input type='submit'
                   value="Add Appointment" />
        </form>
    );
};
