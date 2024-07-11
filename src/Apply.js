import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const Apply = () => {
    const location = useLocation();
    const { selectedTemplate } = location.state || {};
    const [formData, setFormData] = useState({
        name: '',
        whatsappNumber: '',
        templateName: selectedTemplate ? selectedTemplate.TemplateName : '',
        category: selectedTemplate ? selectedTemplate.TemplateCategory : '',
        email: '',
        state: ''
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const customersRef = collection(db, 'customers');
            await addDoc(customersRef, formData);
            setSuccessMessage("Application Submitted Successfully");
            setFormData({
                name: '',
                whatsappNumber: '',
                templateName: selectedTemplate ? selectedTemplate.TemplateName : '',
                category: selectedTemplate ? selectedTemplate.TemplateCategory : '',
                email: '',
                state: ''
            });
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000); // Clear success message after 3 seconds
        } catch (error) {
            console.error('Error adding document: ', error);
            alert(`Failed to submit application: ${error.message}`);
        }
    };

    return (
        <div className="container mt-5" style={{ width: '350px' }}>
            <h2>Apply for Template</h2>
            {successMessage && <div className="alert alert-success mb-3 pb-lg-2">{successMessage}</div>} {/* Display success message */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="whatsappNumber">WhatsApp Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="whatsappNumber"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="templateName">Template Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="templateName"
                        name="templateName"
                        value={formData.templateName}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        className="form-control"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Birthday">Birthday Templates</option>
                        <option value="Wedding">Wedding Invitation Templates</option>
                        <option value="Engagement">Engagement Invitation Templates</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Apply;
