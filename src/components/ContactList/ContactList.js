import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.item}>
        <Contact
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
          id={id}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect()(ContactList);
