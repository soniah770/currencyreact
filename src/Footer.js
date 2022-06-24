import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      Created by
      <a
        href="http://sonialearn.com"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {' '}
        SoniaLearn
      </a>
      <a
      
        target="_blank"
        rel="noreferrer"
        className="ic"
        id="tw"
      >
        <FaTwitter className="fa" />
      </a>{' '}
      <a
        
        target="_blank"
        rel="noreferrer"
        className="ic"
        id="insta"
      >
        <FaInstagram className="fa" />
      </a>{' '}
      <a
     
        target="_blank"
        rel="noreferrer"
        className="ic"
        id="linkdin"
      >
        <FaLinkedin className="fa" />
      </a>
    </footer>
  );
};

export default Footer;
