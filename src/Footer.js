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
        href="/"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="twitter"
      >
        <FaTwitter className="fa" />
      </a>{' '}
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="instagram"
      >
        <FaInstagram className="fa" />
      </a>{' '}
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="linkedin"
      >
        <FaLinkedin className="fa" />
      </a>
    </footer>
  );
};

export default Footer;
