import React, {useEffect, useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

    const appointments = props.appointments;
    const contacts = props.contacts;
    const addAppointment = props.addAppointment;
    const removeAppointment = props.removeAppointment;

    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duplicateTitle, setDuplicateTitle] = useState(false);

    useEffect(() => {
        for(let i = 0; i < appointments.length; i++) {
            if(appointments[i].title === title) {
                setDuplicateTitle(true);
                document.getElementById("duplicateTitle").removeAttribute('hidden');
                return;
            }
        }
        setDuplicateTitle(false);
        document.getElementById("duplicateTitle").setAttribute('hidden', 'hidden');
    }, [title]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(duplicateTitle === true) { //prevent form submission if the appointment title is not unique
            return;
        }
        if(contact !== "") {
            addAppointment(title, contact, date, time);
            setTitle('');
            setDate('');
            setTime('');
        } else {
            document.getElementById("contactError").style.display = 'block';
        }
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    title={title}
                    setTitle={setTitle}
                    contact={contact}
                    setContact={setContact}
                    contacts={contacts}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    handleSubmit={handleSubmit} />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList appointments={appointments} removeAppointment={removeAppointment} />
            </section>
        </div>
    );
};
