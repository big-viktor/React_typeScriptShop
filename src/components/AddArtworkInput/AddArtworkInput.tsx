import React, { useState } from 'react';
import './AddArtworkInput.css';

interface AddArtworkInputI {
  label: string;
  placeholder?: string;
  usingTextarea: boolean;
  reverseBox?: boolean;
}

const AddArtworkInput: React.FC<AddArtworkInputI> = ({
  reverseBox,
  label,
  placeholder,
  usingTextarea,
}) => {
  const [activeButton, setactiveButton] = useState(false);

  return (
    <>
      {!reverseBox ? (
        <div className="add-artwork-input-container">
          <p className="add-artwork-input-name">{label}</p>
          {!usingTextarea ? (
            <input
              className="add-artwork-input"
              type="text"
              placeholder={placeholder}
            />
          ) : (
            <textarea name="message" className="add-artwork-input-texterea">
              {placeholder}
            </textarea>
          )}
        </div>
      ) : (
        <div>
          <p className="add-artwork-input-name-reverse">{label}</p>
          <div className="add-artwork-input-container-reverse"> </div>
        </div>
      )}
    </>
  );
};
export default AddArtworkInput;
