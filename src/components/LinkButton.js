import React from 'react';
import './LinkButton.css';

const LinkButton = ({ link, text }) => {
  return (
    <a href={link} className="link-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default LinkButton;
