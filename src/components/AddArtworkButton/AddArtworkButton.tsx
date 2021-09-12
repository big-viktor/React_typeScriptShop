import React from 'react';
import './AddArtworkButton.css';

interface AddArtworkButtonI {
  label: string;
  replacementBackground: boolean;
}

const AddArtworkButton: React.FC<AddArtworkButtonI> = ({
  label,
  replacementBackground,
}) => (
  <div>
    {!replacementBackground ? (
      <div className="add-artwork-button-content">
        <button type="button" className="add-artwork-button-text">
          {label}
        </button>
      </div>
    ) : (
      <div className="add-artwork-button-reverse">
        <button type="button" className="add-artwork-button-text-reverse ">
          {label}
        </button>
      </div>
    )}
  </div>
);
export default AddArtworkButton;
