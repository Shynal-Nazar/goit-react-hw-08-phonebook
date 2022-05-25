import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerDotted } from 'spinners-react';
import { useDeleteContactMutation } from 'redux/mockApi';
import {
  ContactsItem,
  ContactsItemName,
  ContactsBtn,
  LoaderBox,
} from './Contact.styled';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isUninitialized }] =
    useDeleteContactMutation();
  if (isUninitialized) {
    return (
      <LoaderBox className="sweet-loading">
        <SpinnerDotted size={50} color={'#0d64ef'} />
      </LoaderBox>
    );
  }
  return (
    <ContactsItem>
      <ContactsItemName>
        {name}: {number}
      </ContactsItemName>

      <ContactsBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </ContactsBtn>
    </ContactsItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
