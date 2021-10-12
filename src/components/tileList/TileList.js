import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
    let jsxArray = [];

    if (props.currentContacts) {
        jsxArray = props.currentContacts.map((contact) => {
            return <Tile key={contact.name} contactOrAppointment={contact} remove={props.removeContact}/>;
        });
    } else {
        jsxArray = props.appointments.map((appointment) => {
            return <Tile key={appointment.title} contactOrAppointment={appointment} remove={props.removeAppointment}/>;
        });
    }

    return (
        <div className='tilelist'>
            { jsxArray }
        </div>
    );
};
