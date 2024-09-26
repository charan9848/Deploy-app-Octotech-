import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import emailjs from '@emailjs/browser';

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
    
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.whatsappNumber) {
            newErrors.whatsappNumber = "WhatsApp Number is required.";
        } else if (!/^\d{10}$/.test(formData.whatsappNumber)) {
            newErrors.whatsappNumber = "WhatsApp Number must be exactly 10 digits.";
        }
        if (!formData.category) newErrors.category = "Category is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.state.trim()) newErrors.state = "State is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            // Save to Firestore
            const customersRef = collection(db, 'customers');
            await addDoc(customersRef, formData);

            // Send email
            const templateParams = {
                from_name: formData.name,
                // to_name: 'Recipient Name', // Replace with recipient's name
                reply_to: formData.email,
                whatsapp_number: formData.whatsappNumber,
                template_name: formData.templateName,
                category: formData.category,
                state: formData.state,
            };

            await emailjs.send('service_lfliz7v', 'template_74pwcp3', templateParams, '0Tf5hyZ2w00RXElJV');

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
            console.error('Error: ', error);
            alert(`Failed to submit application: ${error.message}`);
        }
    };

    return (
        <div className="container mt-5" style={{ width: '350px' }}>
            <h2>Apply for Template</h2>
            {successMessage && <div className="alert alert-success mb-3 pb-lg-2">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: <span style={{ color: 'red' }}>*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="whatsappNumber">WhatsApp Number: <span style={{ color: 'red' }}>*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="whatsappNumber"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.whatsappNumber && <div className="text-danger">{errors.whatsappNumber}</div>}
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category: <span style={{ color: 'red' }}>*</span></label>
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
                        <option value="Blender">Blender Templates</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.category && <div className="text-danger">{errors.category}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: <span style={{ color: 'red' }}>*</span></label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="state">State: <span style={{ color: 'red' }}>*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    {errors.state && <div className="text-danger">{errors.state}</div>}
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Apply;
