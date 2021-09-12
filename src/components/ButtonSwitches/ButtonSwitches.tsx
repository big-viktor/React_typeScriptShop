import React from 'react';
import ButtonCase from '../ButtonCase/ButtonCase';
import SelectionMenu from '../SelectionMenu/SelectionMenu';
import Toggle from '../Toggle/Toggle';
import './ButtonSwitches.css';

const ButtonSwitches: React.FC = () => {
  const item = ['Add Pattern Fill', 'Add Artwork', 'Add Text Layer'];
  return (
    <>
      <div className="button-switches-container">
        <div className="button-switches-page">
          <Toggle />
          <div>
            <ButtonCase>
              <SelectionMenu />
            </ButtonCase>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonSwitches;
