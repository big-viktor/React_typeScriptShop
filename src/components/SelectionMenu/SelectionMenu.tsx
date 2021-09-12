import React from 'react';
import './SelectionMenu.css';

const SelectionMenu: React.FC = () => (
  <div className="section-menu-container">
    <button type="button" className="section-menu-button">
      Save As
    </button>
    <button type="button" className="section-menu-button">
      Switch Products
    </button>
    <button type="button" className="section-menu-button">
      Check design
    </button>
  </div>
);
export default SelectionMenu;
