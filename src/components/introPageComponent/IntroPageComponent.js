import React from 'react';

export const IntroPageComponent = () => {
    return (
        <div>
            <hr />
            <h1>APPOINTMENT PLANNER</h1>
            <p className="intro">Welcome to <span className="greenSpan"><em>Appointment Planner</em></span>, an app that allows you to keep track of your contacts and appointments.</p>
            <p className="intro">Select <span className="greenSpan">'Contacts'</span> to view your contacts, or <span className="greenSpan">'Appointments'</span> to view your appointments.</p>
        </div>
    );
};