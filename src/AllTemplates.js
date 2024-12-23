import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import './AllTemplates.css';

const AllTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            setLoading(true);
            const templatesRef = collection(db, "templates");
            const snapshot = await getDocs(templatesRef);
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTemplates(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setError('Failed to load templates. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const renderVideo = (url) => {
        if (url && url.includes("drive.google.com")) {
            const videoId = extractDriveVideoId(url);
            return (
                <div className="template-video-container">
                    <iframe
                        className="template-video"
                        src={`https://drive.google.com/file/d/${videoId}/preview`}
                        title="Template preview video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        } else {
            return (
                <div className="no-video">
                    <span>Preview not available</span>
                </div>
            );
        }
    };

    const extractDriveVideoId = (url) => {
        const match = url.match(/[-\w]{25,}/);
        return match ? match[0] : '';
    };

    const handleApply = (template) => {
        navigate('/apply', { state: { selectedTemplate: template } });
    };

    if (loading) {
        return (
            <div className="templates-container">
                <div className="templates-loading">
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="templates-container">
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="templates-container" style={{ backgroundColor: '#333', color: '#ffffff' }}>
            <div className="templates-header">
                <h1 className="templates-title">Video Templates</h1>
                <p className="templates-subtitle">
                    Choose from our collection of professional video templates. 
                    Each template is carefully crafted to help you create stunning videos.
                </p>
            </div>

            <div className="templates-grid">
                {templates.map((template) => (
                    <div key={template.id} className="template-card">
                        {renderVideo(template.TemplateVideoUrl)}
                        
                        <div className="template-content">
                            <h2 className="template-title">{template.TemplateName}</h2>
                            <p className="template-description">{template.TemplateDescription}</p>
                            
                            <div className="template-meta">
                                <div className="template-price">₹{template.TemplatePrice}</div>
                                <span className="template-category">{template.TemplateCategory}</span>
                            </div>
                            
                            <button 
                                onClick={() => handleApply(template)} 
                                className="template-apply-btn"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTemplates;
