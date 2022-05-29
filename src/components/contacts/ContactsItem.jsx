import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SpinnerDotted } from 'spinners-react';
import {
  ContactsItem,
  ContactsItemName,
  ContactsBtn,
  LoaderBox,
} from './Contact.styled';
import * as contactsOperations from '../../redux/Contacts/Contacts-operations';
import { useSelector, useDispatch } from 'react-redux';

const ContactListItem = ({ name, number, id }) => {
  const [btnId, setBtnId] = useState(null);
  const loading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  if (loading === 'delete' && btnId !== null) {
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

      <ContactsBtn
        type="button"
        onClick={() => {
          setBtnId(id);
          dispatch(contactsOperations.deleteContact({ id, name }));
        }}
      >
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
