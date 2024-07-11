import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const initialState = {
    TemplateName: "",
    TemplateDescription: "",
    TemplatePrice: 0,
    TemplateVideoUrl: "",
    TemplateCategory: "",
    CustomCategory: ""
};

const Addtemplate = () => {
    const [template, setTemplate] = useState(initialState);

    // Function to extract Google Drive video ID from URL
    const extractDriveVideoId = (url) => {
        const match = url.match(/[-\w]{25,}/);
        return match ? match[0] : '';
    };

    const AddTemplate = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            if (!template.TemplateName || template.TemplatePrice === 0 || !template.TemplateVideoUrl || (!template.TemplateCategory && !template.CustomCategory)) {
                alert("Please fill in all required fields.");
                return;
            }

            const productRef = collection(db, 'templates');
            await addDoc(productRef, template);
            alert("Template Added to the database");
            setTemplate(initialState); // Reset form fields after successful submission
        } catch (error) {
            console.error('Error adding template: ', error);
            alert(`Failed to add template: ${error.message}`);
        }
    };

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setTemplate(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleVideoClick = () => {
        const videoId = extractDriveVideoId(template.TemplateVideoUrl);
        if (videoId) {
            setTemplate(prevState => ({
                ...prevState,
                TemplateVideoUrl: `https://drive.google.com/file/d/${videoId}/preview`
            }));
        }
    };

    // Function to render Google Drive video based on URL
    const renderVideo = (url) => {
        if (url && url.includes("drive.google.com")) {
            return (
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={url}
                        title="Google Drive Video"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        } else {
            return <span>No Video Available</span>;
        }
    };

    return (
        <div className="container mt-3 col-sm-6"> 
       
            <h2>Add Template here</h2>
            <form onSubmit={AddTemplate}>
                <div className="mb-3 mt-3">
                    <label htmlFor="TemplateName">Template Name:</label>
                    <input type="text" className="form-control" placeholder="Template Name" name="TemplateName" value={template.TemplateName} onChange={HandleChange} required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="TemplateDescription">Template Description:</label>
                    <input type="text" className="form-control" placeholder="Template Description" name="TemplateDescription" value={template.TemplateDescription} onChange={HandleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="TemplatePrice">Template Price:</label>
                    <input type="number" className="form-control" placeholder="Template Price" name="TemplatePrice" value={template.TemplatePrice} onChange={HandleChange} required />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="TemplateCategory">Template Category:</label>
                    <select className="form-control" name="TemplateCategory" value={template.TemplateCategory} onChange={HandleChange} required>
                        <option value="">Select Category</option>
                        <option value="Birthday">Birthday Templates</option>
                        <option value="Wedding">Wedding Invitation Templates</option>
                        <option value="Engagement">Engagement Invitation Templates</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {template.TemplateCategory === "Other" && (
                    <div className="mb-3 mt-3">
                        <label htmlFor="CustomCategory">Custom Category:</label>
                        <input type="text" className="form-control" placeholder="Custom Category" name="CustomCategory" value={template.CustomCategory} onChange={HandleChange} required />
                    </div>
                )}
                <div className="mb-3 mt-3">
                    <label htmlFor="TemplateVideoUrl">Template Video URL:</label>
                    <input type="text" className="form-control" placeholder="Template Video URL" name="TemplateVideoUrl" value={template.TemplateVideoUrl} onChange={HandleChange} onBlur={handleVideoClick} required />
                </div>
                
                <div className="mb-3 mt-3">
                    {renderVideo(template.TemplateVideoUrl)}
                </div>
                <button type="submit" className="btn btn-primary">Add Template</button>
                <button type="button" className="btn btn-warning" onClick={() => window.location.href = '/viewtemplates'} style={{marginLeft:'20px'}}>
            View Templates
          </button>
            </form>
        </div>
    );
};

export default Addtemplate;
