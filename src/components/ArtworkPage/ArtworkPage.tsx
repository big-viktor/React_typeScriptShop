import React, { useCallback } from 'react';

import AddArtwork from '../AddArtwork/AddAtrtwork';
import AddArtworkButton from '../AddArtworkButton/AddArtworkButton';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Cross from '../../assets/img/cross.png';
import './ArtworkPage.css';
import UploadArtwork from '../UploadArtwork/UploadArtwork';

const ArtworkPage: React.FC = () => {
  const item = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ];
  const renderItem = useCallback(() => <AddArtwork />, []);

  return (
    <>
      <div className="body-background">
        <div className="artwork-page-container">
          <div className="content-starts">
            <div className="button-exite">
              <ButtonIcon src={Cross} />
            </div>
            <p className="artwork-page-name">Add Artwork</p>
          </div>
          <div className="container-scroll">
            <div className="artwork-page-add">
              <UploadArtwork />
              {item.map(() => renderItem())}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkPage;
