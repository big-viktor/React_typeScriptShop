import React, { useCallback, useState, useEffect } from 'react';
import ButtonOption from '../ButtonOption/ButtonOption';
import './ItemMenu.css';

interface ItemMenuI {
  label: string;
  reverse: boolean;
  children?: React.ReactNode;
}

const ItemMenu: React.FC<ItemMenuI> = ({ label, reverse, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const labels = ['Artboard Layers', 'Standard Options', 'Upgrade Options'];
  return (
    <>
      {!reverse ? (
        <>
          <button
            type="button"
            className={isOpen ? 'button-options-reverse' : 'button-options'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="button-options-text">{label}</p>
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className={isOpen ? 'items-menu-reverse' : 'items-menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="items-menu-text">{label}</p>
          </button>
          <div className={isOpen ? undefined : 'dropdown'}>{children}</div>
        </>
      )}
    </>
  );
};
export default ItemMenu;
