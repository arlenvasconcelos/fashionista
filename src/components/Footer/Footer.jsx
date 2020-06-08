import React from 'react';
import {Instagram, Facebook, Twitter} from 'react-feather';

import './Footer.scss';

const Footer = ({stylePosition}) => {

  return (
    <footer className="footer" style={{position: stylePosition}}>
      <div className="container">
        <h3>Fashionista E-commerce</h3>
        <p>Acompanhe-nos também nas redes sociais</p>
        <div className="footer__icons">
          <a href="#"><Instagram/></a>
          <a href="#"><Twitter/></a>
          <a href="#"><Facebook/></a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
