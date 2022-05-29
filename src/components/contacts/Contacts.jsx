import { PhonebookSectionp } from '../phonebook/Phonebook';
import ContactList from './ContactsList';
import Filter from '../filter/Filter';
import { Container } from '../App.styled';
import { useSelector } from 'react-redux';

export default function Contacts() {
  const contactsState = useSelector(state => state.contacts.entities);
  return (
    <Container>
      <PhonebookSectionp />
      <div>
        {contactsState.length > 0 && <Filter />}
        <ContactList />
      </div>
    </Container>
  );
}
