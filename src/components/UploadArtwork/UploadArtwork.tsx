import './UploadArtwork.css';
import React from 'react';

const UploadArtwork: React.FC = () => (
  <div className="upload-artwork">
    <div className="upload-artwork-container">
      <p className="upload-artwork-plus">+</p>
      <p className="upload-artwork-title">
        Upload New <br /> Artwork
      </p>
      <p className="upload-artwork-format">.png,.jpeg,or.ai</p>
    </div>
    <div className="upload-artwork-text">
      <span className="upload-artwork-paint">NOTE:</span> Large files are best
      uploaded through the
      <span className="upload-artwork-tab"> artwork tab </span>
      on your account.If added here,you won'ts be able ta save your design until
      the artwork has finished uploading.
    </div>
  </div>
);

export default UploadArtwork;
