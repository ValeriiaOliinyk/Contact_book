import React from 'react';
import './Contact.scss';
import BtnHelper from '../BtnHelper';
import { ReactComponent as Delete } from './delete.svg';

const Contact = ({ name, number, onDeleteContact }) => (
  <>
    <p className="Contact__text">
      {name}: {number}
    </p>
    <BtnHelper onClick={onDeleteContact} className="Contact__btn">
      <Delete width="20" height="20" fill="white" />
    </BtnHelper>
  </>
);

export default Contact;
