import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';

const PDFCard = ({ name, size, pdfImage, pdfFile, level }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDownload = () => {
    setShowConfirmation(true);
  };

  const confirmDownload = () => {
    saveAs(pdfFile, name);
    alert(`NUESA PDF: '${name}' has been downloaded`);
    setShowConfirmation(false);
  };

  const cancelDownload = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={pdfImage} alt="PDF Thumbnail" />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1">{name}</div>
        <p className="text-gray-700 text-sm mb-2">Size: {size}</p>
        <p className="text-gray-700 text-sm mb-2">Level: {level}</p>
        <div className="flex justify-center mt-2">
          <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </button>
        </div>
        {showConfirmation && (
          <div className="mt-2 flex justify-center">
            <p className="text-gray-700 mr-2">Are you sure you want to download the PDF?</p>
            <button
              onClick={confirmDownload}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Yes
            </button>
            <button
              onClick={cancelDownload}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

PDFCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  pdfImage: PropTypes.string.isRequired,
  pdfFile: PropTypes.object.isRequired,
  level: PropTypes.string.isRequired,
};

export default PDFCard;
