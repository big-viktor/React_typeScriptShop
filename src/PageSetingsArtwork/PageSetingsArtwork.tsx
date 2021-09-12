import React, { useState } from 'react';
import AddArtwork from '../components/AddArtwork/AddAtrtwork';
import ButtonIcon from '../components/ButtonIcon/ButtonIcon';
import Cross from '../assets/img/cross.png';
import Less from '../assets/img/Less.png';
import Info from '../assets/img/info.png';
import Pipett from '../assets/img/pipett.png';
import './PageSetingsArtwork.css';
import NavigationButon from '../components/NavigationButton/NavigationButton';
import AddArtworkInput from '../components/AddArtworkInput/AddArtworkInput';
import AddArtworkButton from '../components/AddArtworkButton/AddArtworkButton';
import AddArtworkToolTip from '../components/AddArtworkToolTip/AddArtworkToolTip';

const PageSetingsArtwork: React.FC = () => {
  const [openInfoMenu, closeInfoMenu] = useState(false);

  return (
    <div className="body-background ">
      <div className="page-seting-artwork-container">
        <div className="button-exite">
          <div className="content-starts">
            <p className="name-container">Add Artwork</p>
            <div className="button-exit">
              <ButtonIcon src={Cross} />
            </div>
          </div>
        </div>
        <div className="artwork-container">
          <div className="artwork-conetn-page">
            <div className="add-artwork-page">
              <NavigationButon label="back" src={Less} reverseLabel={false} />
            </div>
            <div>
              <AddArtwork reverse={true} />
            </div>
          </div>
          <div className="page-inputes-container">
            <div>
              <AddArtworkInput
                usingTextarea={false}
                label="name"
                placeholder="Sunset Photo"
              />
            </div>
            <div className="inpute-bottom">
              <AddArtworkInput
                usingTextarea={true}
                label="description"
                placeholder="Sunset Photo lorem ipsum"
              />
            </div>
            <div>
              <AddArtworkInput
                reverseBox={true}
                usingTextarea={false}
                label="tags"
              />
            </div>
            <div className="button-tool-tip-container">
              <p className="button-text-tool-tip"> PANTONE VALUES</p>
              <button
                type="button"
                className="button-tool-tip"
                onClick={() => closeInfoMenu(!openInfoMenu)}
              >
                <ButtonIcon src={Info} />
              </button>
              {!openInfoMenu ? (
                <div>
                  {' '}
                  <div className="tool-tip-content">
                    <AddArtworkToolTip />
                  </div>
                </div>
              ) : (
                <>{undefined}</>
              )}
            </div>
            <div className="select-color-page-artwork">
              <NavigationButon
                label="select a color"
                src={Pipett}
                reverseLabel={false}
              />
            </div>
            <div className="container-buttons">
              <div>
                <AddArtworkButton
                  label="cancel"
                  replacementBackground={false}
                />
              </div>
              <AddArtworkButton label="save" replacementBackground={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageSetingsArtwork;
