import React from 'react';
import './Title.scss';

const Title = ({ text }) => (
  <>
    <div className="Title__box">
      <div className="Title__img"></div>
      <h2>{text}</h2>
    </div>
  </>
);

export default Title;
