import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import emailjs from '@emailjs/browser';
import './Apply.css';

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.whatsappNumber) {
            newErrors.whatsappNumber = "WhatsApp Number is required";
        } else if (!/^\d{10}$/.test(formData.whatsappNumber)) {
            newErrors.whatsappNumber = "Please enter a valid 10-digit number";
        }
        if (!formData.category) newErrors.category = "Please select a category";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.state.trim()) newErrors.state = "State is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Save to Firestore
            const customersRef = collection(db, 'customers');
            await addDoc(customersRef, formData);

            // Send email
            const templateParams = {
                from_name: formData.name,
                reply_to: formData.email,
                whatsapp_number: formData.whatsappNumber,
                template_name: formData.templateName,
                category: formData.category,
                state: formData.state,
            };

            await emailjs.send('service_lfliz7v', 'template_74pwcp3', templateParams, '0Tf5hyZ2w00RXElJV');

            setSuccessMessage("Thank you! Your application has been submitted successfully.");
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
            }, 5000);
        } catch (error) {
            console.error('Error: ', error);
            setErrors({ submit: 'Failed to submit application. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="apply-container">
            <div className="apply-card">
                {isSubmitting && (
                    <div className="loading-overlay">
                        <div className="loading-spinner"></div>
                    </div>
                )}

                <div className="apply-header">
                    <h1 className="apply-title">Apply for Template</h1>
                    <p className="apply-subtitle">Fill in your details to get started</p>
                </div>

                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                {selectedTemplate && (
                    <div className="template-info">
                        <div className="template-info-title">Selected Template</div>
                        <p className="template-info-text">{selectedTemplate.TemplateName}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">
                            Name
                            <span className="required-star">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            WhatsApp Number
                            <span className="required-star">*</span>
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            placeholder="Enter your WhatsApp number"
                        />
                        {errors.whatsappNumber && <div className="error-message">{errors.whatsappNumber}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Category
                            <span className="required-star">*</span>
                        </label>
                        <select
                            className="form-control form-select"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select a category</option>
                            <option value="Birthday">Birthday Templates</option>
                            <option value="Wedding">Wedding Invitation Templates</option>
                            <option value="Engagement">Engagement Invitation Templates</option>
                            <option value="Blender">Blender Templates</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.category && <div className="error-message">{errors.category}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Email
                            <span className="required-star">*</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            State
                            <span className="required-star">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="Enter your state"
                        />
                        {errors.state && <div className="error-message">{errors.state}</div>}
                    </div>

                    {errors.submit && <div className="error-message text-center mb-3">{errors.submit}</div>}

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Apply;
