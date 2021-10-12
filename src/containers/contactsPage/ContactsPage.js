import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

    const currentContacts = props.contacts;
    const addNewContact = props.addContact;
    const removeContact = props.removeContact;

    const [ currentName, setCurrentName ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ duplicate, setDuplicate ] = useState(false);

    useEffect(() => {
        for(let i = 0; i < currentContacts.length; i++) {
            if(currentContacts[i].name === currentName) {
                setDuplicate(true);
                document.getElementById("duplicateName").removeAttribute('hidden');
                return;
            }
        }
        setDuplicate(false);
        document.getElementById("duplicateName").setAttribute('hidden', 'hidden');
    }, [currentName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(duplicate === false) {
            addNewContact(currentName, phoneNumber, email);
            setCurrentName('');
            setPhoneNumber('');
            setEmail('');
        }
    };

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    currentName={currentName}
                    setCurrentName={setCurrentName}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit} />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList currentContacts={currentContacts} removeContact={removeContact} />
            </section>
        </div>
    );
};
