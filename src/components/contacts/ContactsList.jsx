import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/mockApi';
import { SpinnerDotted } from 'spinners-react';
import ContactListItem from './ContactsItem';
import { ContactsSection, ContactsList } from './Contact.styled';

const ContactList = () => {
  const { data, error, isFetching } = useGetContactsQuery('');
  const filter = useSelector(state => state.filter);
  if (data) {
    const getFilteredContacts = () => {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    };

    const filteredContacts = getFilteredContacts();
    return (
      filteredContacts.length > 0 && (
        <ContactsSection>
          <ContactsList>
            {filteredContacts.map(({ id, name, phone }) => (
              <ContactListItem key={id} name={name} number={phone} id={id} />
            ))}
          </ContactsList>
        </ContactsSection>
      )
    );
  }

  if (error) {
    return <h1>Contacts not found</h1>;
  }

  if (isFetching) {
    return <SpinnerDotted size={150} color={'#0d64ef'} />;
  }
};

export default ContactList;
