import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SpinnerDotted } from 'spinners-react';
import ContactListItem from './ContactsItem';
import { ContactsSection, ContactsList } from './Contact.styled';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/Contacts/Contacts-operations';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const dataState = useSelector(state => state.contacts.entities);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);

  useEffect(() => {
    dispatch(contactsOperations.getContacts(''));
  }, [dispatch]);

  if (dataState) {
    const getFilteredContacts = () => {
      return dataState.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    };

    const filteredContacts = getFilteredContacts();
    return (
      filteredContacts.length > 0 && (
        <ContactsSection>
          <ContactsList>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactListItem key={id} name={name} number={number} id={id} />
            ))}
          </ContactsList>
        </ContactsSection>
      )
    );
  }

  if (loading === 'failed') {
    return <h1>Contacts not found</h1>;
  }

  if (loading === 'pending') {
    return <SpinnerDotted size={150} color={'#0d64ef'} />;
  }
};

export default ContactList;
