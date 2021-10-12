import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { IntroPageComponent } from "./components/introPageComponent/IntroPageComponent";

function App() {

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    ABOUT: "/",
  };

  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name,
      phoneNumber,
      email
    };
    setContacts([...contacts, newContact]);
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title,
      contact,
      date,
      time
    };
    setAppointments([...appointments, newAppointment]);
  }

  const removeContact = (contactName) => {
    const newContacts = contacts.filter((contact) => {
      return contact.name !== contactName;
    });
    setContacts(newContacts);
  }

  const removeAppointment = (appointmentTitle) => {
    const newAppointments = appointments.filter((appointment) => {
      return appointment.title !== appointmentTitle;
    });
    setAppointments(newAppointments);
  }

  return (
      <>
        <nav>
          <NavLink exact to={ROUTES.ABOUT} activeClassName="active">
            About
          </NavLink>
          <NavLink to={ROUTES.CONTACTS} activeClassName="active">
            Contacts
          </NavLink>
          <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
            Appointments
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route path={ROUTES.ABOUT} exact>
              <IntroPageComponent />
            </Route>
            <Route path={ROUTES.CONTACTS}>
              <ContactsPage contacts={contacts} addContact={addContact} removeContact={removeContact} />
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
              <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} removeAppointment={removeAppointment} />
            </Route>
          </Switch>
        </main>
      </>
  );
}

export default App;
