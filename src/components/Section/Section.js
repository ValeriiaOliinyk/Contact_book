import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children, title }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.box}>{children}</div>
  </>
);

Section.protoTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
