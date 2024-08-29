import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const initialState = {
    ImageUrl: "",
    ImageAltText: "",
    ImageTitle: "",
    ImageDescription: "",
    ImageCategory: "",
    CustomCategory: ""
};

const AddImage = () => {
    const [imageData, setImageData] = useState(initialState);

    const addImage = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            if (!imageData.ImageUrl || !imageData.ImageTitle || (!imageData.ImageCategory && !imageData.CustomCategory)) {
                alert("Please fill in all required fields.");
                return;
            }

            const imagesRef = collection(db, 'sliderImages');
            await addDoc(imagesRef, imageData);
            alert("Image added to the database");
            setImageData(initialState); // Reset form fields after successful submission
        } catch (error) {
            console.error('Error adding image: ', error);
            alert(`Failed to add image: ${error.message}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setImageData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Function to render the image preview
    const renderImagePreview = (url) => {
        if (url) {
            return (
                <div className="mb-3 mt-3">
                    <img
                        src={url}
                        alt={imageData.ImageAltText || "Image preview"}
                        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                    />
                </div>
            );
        } else {
            return <span>No Image Available</span>;
        }
    };

    return (
        <div className="container mt-3 mb-5 col-sm-6">
            <h2>Add Image</h2>
            <form onSubmit={addImage}>
                <div className="mb-3 mt-3">
                    <label htmlFor="ImageTitle">Image Title:</label>
                    <input type="text" className="form-control" placeholder="Image Title" name="ImageTitle" value={imageData.ImageTitle} onChange={handleChange} required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="ImageDescription">Image Description:</label>
                    <input type="text" className="form-control" placeholder="Image Description" name="ImageDescription" value={imageData.ImageDescription} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="ImageAltText">Image Alt Text:</label>
                    <input type="text" className="form-control" placeholder="Image Alt Text" name="ImageAltText" value={imageData.ImageAltText} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="ImageCategory">Image Category:</label>
                    <select className="form-control" name="ImageCategory" value={imageData.ImageCategory} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="Nature">Nature</option>
                        <option value="Technology">Technology</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {imageData.ImageCategory === "Other" && (
                    <div className="mb-3 mt-3">
                        <label htmlFor="CustomCategory">Custom Category:</label>
                        <input type="text" className="form-control" placeholder="Custom Category" name="CustomCategory" value={imageData.CustomCategory} onChange={handleChange} required />
                    </div>
                )}
                <div className="mb-3 mt-3">
                    <label htmlFor="ImageUrl">Image URL:</label>
                    <input type="text" className="form-control" placeholder="Image URL" name="ImageUrl" value={imageData.ImageUrl} onChange={handleChange} required />
                </div>
                
                {renderImagePreview(imageData.ImageUrl)}

                <button type="submit" className="btn btn-primary">Add Image</button>
                <button type="button" className="btn btn-warning" onClick={() => window.location.href = '/viewimages'} style={{ marginLeft: '20px' }}>
                    View Images
                </button>
            </form>
        </div>
    );
};

export default AddImage;
