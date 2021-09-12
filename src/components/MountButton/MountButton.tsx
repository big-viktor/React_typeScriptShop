import React from 'react';
import './MountButton.css';

interface MountButtonI {
  src: string;
  label: string;
  setting: string;
  eye: string;
  trashСan: string;
}

const MountButton: React.FC<MountButtonI> = ({
  src,
  label,
  setting,
  eye,
  trashСan,
}) => (
  <>
    <div className="mount-container">
      <div className="mount-textImg">
        <button type="button" className="map-button">
          <img src={src} alt="" className="map-img" />
        </button>
        <a className="mount-text">{label}</a>
      </div>
      <div>
        <button type="button" className="setting-button">
          <img src={setting} alt="" className="setting-img" />
        </button>
        <button type="button" className="eye-button">
          <img src={eye} alt="" className="eye-img" />
        </button>
        <button type="button" className="navigation-button">
          <img src={trashСan} alt="" className="trashСan-img" />
        </button>
      </div>
    </div>
  </>
);

export default MountButton;
