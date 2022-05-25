import React from 'react';
import { FilterSection, FilterName, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filterState = useSelector(state => state.contacts.filter);

  const filterStateChange = evt => {
    dispatch(change(evt.target.value));
  };
  return (
    <FilterSection>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput
        type="text"
        value={filterState}
        onChange={filterStateChange}
      />
    </FilterSection>
  );
}
