import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <div className="header">
    <div className="wrapper d-flex flex-row justify-content-between">
      <div className="logo">
        <a href="#">Skyou</a>
      </div>
      <div className="menu-user">Hi, Roman!</div>
    </div>
  </div>
);

export default Header;
