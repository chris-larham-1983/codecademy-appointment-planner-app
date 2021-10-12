import React from "react";

export const Tile = (props) => {

    const handleClick = (e) => {
        let removalKey;

        if(props.contactOrAppointment.name) {
            removalKey = props.contactOrAppointment.name;
        } else {
            removalKey = props.contactOrAppointment.title;
        }
        props.remove(removalKey);
    }

    const properties = [];

    for(const [key, value] of Object.entries(props.contactOrAppointment)) {
        properties.push(value);
    }

    let jsx = '';
    let jsxArray = [];
    for(let i = 0; i < properties.length; i++) {
        jsx = '';
        if(i === 0) {
            jsx = <p className="tile-title">* {properties[0]} *</p>;
            jsxArray.push(jsx);
        } else {
            jsx = <p className="tile">- {properties[i]}</p>;
            jsxArray.push(jsx);
        }
        if(i === properties.length - 1) {
            jsx = <p onClick={handleClick} id='remove'>&rarr; Click to remove &uarr;</p>;
            jsxArray.push(jsx);
        }
    }

    return (
        <div className="tile-container">
            { jsxArray }
        </div>
    );
};