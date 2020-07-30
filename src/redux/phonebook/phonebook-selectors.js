import { createSelector } from '@reduxjs/toolkit';

export const getFilter = ({ contacts }) => contacts.filter;

const getAllContatcs = ({ contacts: { contacts } }) => contacts;

export const getVisibleContacts = createSelector(
  [getAllContatcs, getFilter],
  (contatcs, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    if (contatcs.length > 1) {
      return contatcs.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    }
  },
);
