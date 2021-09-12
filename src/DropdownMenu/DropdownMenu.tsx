import React from 'react';
import ButtonOption from '../components/ButtonOption/ButtonOption';
import ItemMenu from '../components/ItemMenu/ItemMenu';
import MountButton from '../components/MountButton/MountButton';
import './DropdownMenu.css';
import foto from '../assets/img/Less.png';
import Setting from '../assets/img/setting.png';
import Eye from '../assets/img/eye.png';
import TrashСan from '../assets/img/trashСan.png';
import CheckBoxMenu from '../components/CheckBoxMenu/CheckBoxMenu';
import CheckBox from '../components/CheckBox/CheckBox';
import ButtonDefault from '../components/ButtonDefault/ButtonDefault';

const DropdownMenu: React.FC = () => {
  const item = ['Add Pattern Fill', 'Add Artwork', 'Add Text Layer'];
  const namez = ['Background colors', 'drawstring cords', 'thread color'];
  const checkMenu = [
    'Polyester',
    '250 GSM Cotton (+$2.50)',
    '350 GSM Cotton (+$3.50)',
  ];
  return (
    <>
      <div className="dropdown-menu1">
        <ItemMenu reverse={true} label="Artboard Layers">
          <MountButton
            src={foto}
            label="My Art"
            setting={Setting}
            eye={Eye}
            trashСan={TrashСan}
          />
          {item.map((nameww) => (
            <ButtonOption label={nameww} key={nameww} />
          ))}
        </ItemMenu>

        <ItemMenu reverse={true} label="Standard Options">
          {namez.map((namess) => (
            <ItemMenu reverse={false} label={namess} key={namess} />
          ))}
        </ItemMenu>
        <ItemMenu reverse={true} label="Upgrade Options">
          <CheckBoxMenu reverseCheck={false} label="Fabric">
            {checkMenu.map((checkMenus) => (
              <CheckBox label={checkMenus} key={checkMenus} reverse={true}>
                <ButtonDefault />
              </CheckBox>
            ))}
          </CheckBoxMenu>
          <CheckBoxMenu reverseCheck={false} label="Pocket">
            <CheckBox label="none" reverse={true}>
              <ButtonDefault />
            </CheckBox>
            <CheckBoxMenu label="Front Pocket" reverseCheck={true}>
              <CheckBox label="POCKET ZIPPER (+$5.00)" reverse={false} />
              <CheckBox label="NO POCKET ZIPPER" reverse={false}>
                <ButtonDefault />
              </CheckBox>
            </CheckBoxMenu>
          </CheckBoxMenu>
        </ItemMenu>
      </div>
    </>
  );
};

export default DropdownMenu;
