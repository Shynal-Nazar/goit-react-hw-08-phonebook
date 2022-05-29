import { useState } from 'react';
import {
  PhoneSection,
  PhoneSectionName,
  PhoneForm,
  PhoneLabel,
  PhoneInput,
  PhoneBtn,
} from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from '../../redux/Contacts/Contacts-operations';
import { nanoid } from 'nanoid';

export const PhonebookSectionp = () => {
  const [nameInput, setNameInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const dispatch = useDispatch();
  const contactsState = useSelector(state => state.contacts.entities);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setNameInput(value);

        break;

      case 'number':
        setNumberInput(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { id: nanoid(), name: nameInput, number: numberInput };
    const contactInState = contactsState.some(
      item => item.name.toLowerCase() === nameInput.toLowerCase()
    );
    if (contactInState) {
      alert(`${nameInput} is already in contacts!`);
      return;
    }
    dispatch(contactsOperations.createContact(newContact));
    setNameInput('');
    setNumberInput('');
  };

  return (
    <PhoneSection>
      <PhoneSectionName>Phonebook</PhoneSectionName>
      <PhoneForm onSubmit={handleSubmit}>
        <PhoneLabel>
          Name
          <PhoneInput
            type="text"
            name="name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={nameInput}
            onChange={handleChange}
          />
        </PhoneLabel>
        <PhoneLabel>
          Number
          <PhoneInput
            type="tel"
            id={numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={numberInput}
            onChange={handleChange}
          />
        </PhoneLabel>
        <PhoneBtn type="submit">Add contacts</PhoneBtn>
      </PhoneForm>
    </PhoneSection>
  );
};
