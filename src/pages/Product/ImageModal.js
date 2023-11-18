import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, closeModal }) => {
    return (
        <div className="image-modal" onClick={closeModal}>
            <div className="modal-content">
                <img src={image} alt="Product Image" />
            </div>
        </div>
    );
};

export default ImageModal;