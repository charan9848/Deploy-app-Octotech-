import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

const AllTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const templatesRef = collection(db, "templates");
            const snapshot = await getDocs(templatesRef);
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTemplates(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const renderVideo = (url) => {
        if (url.includes("drive.google.com")) {
            const videoId = extractDriveVideoId(url);
            return (
                <iframe
                    width="100%"
                    height="200"
                    src={`https://drive.google.com/file/d/${videoId}/preview`}
                    title="Google Drive video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else {
            return <span>No Video Available</span>;
        }
    };

    const extractDriveVideoId = (url) => {
        const match = url.match(/[-\w]{25,}/);
        return match ? match[0] : '';
    };

    const handleApply = (template) => {
        navigate('/apply', { state: { selectedTemplate: template } });
    };

    return (
        <div className="container mt-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px', width: '100%' }}>
                {templates.map((template) => (
                    <div key={template.id} className="card text-center" style={{ width: '350px' }}>
                        <div className="card-img-top">
                            {renderVideo(template.TemplateVideoUrl)}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{template.TemplateName}</h5>
                            <p className="card-text">{template.TemplateDescription}</p>
                            <p className="card-text">Price: ₹{template.TemplatePrice}</p>
                            <p className="card-text">Category: {template.TemplateCategory}</p>
                            <button onClick={() => handleApply(template)} className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTemplates;
