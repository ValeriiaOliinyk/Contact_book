import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    <p className={styles.text}>
      {name}: {number}
    </p>
    <button onClick={onDeleteContact} className={styles.button}>
      Delete
    </button>
  </>
);

export default Contact;
