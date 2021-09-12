import './AddArtwork.css';
import React, { useState } from 'react';

interface AddArtworkI {
  reverse?: boolean;
}

const AddArtwork: React.FC<AddArtworkI> = ({ reverse }) => {
  const [activeButton, setactiveButton] = useState(false);
  return (
    <>
      {!reverse ? (
        <div className="add-artwork-container">
          <div className="d-flex justify-content-center ">
            <img
              className="add-artwork-img"
              src="https://fotogora.ru/img/blog/big/2020/8/21/17436.jpg"
              alt="log"
            />
          </div>
          <div className="add-artwork-topic">
            <p>Sunset Photo</p>
          </div>
        </div>
      ) : (
        <div className="add-artwork-container-revers">
          <div className="d-flex justify-content-center-reverse ">
            <img
              className="add-artwork-img-reverse"
              src="https://proprikol.ru/wp-content/uploads/2019/12/rassvet-krasivye-kartinki-na-rabochij-stol-2-650x433.jpg"
              alt="puk-dris"
            />
          </div>
          <div className="add-artwork-topic-reverse">
            <p>Sunset Photo</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddArtwork;
