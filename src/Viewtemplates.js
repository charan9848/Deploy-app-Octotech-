import { collection, doc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { Button } from 'react-bootstrap';

const Viewtemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editUrl, setEditUrl] = useState("");
    const [editCategory, setEditCategory] = useState("");

    // Update template logic
    const UpdateTemplate = async (id) => {
        try {
            const productRef = doc(db, 'templates', id);
            await updateDoc(productRef, {
                TemplateName: editName,
                TemplateDescription: editDescription,
                TemplatePrice: editPrice,
                TemplateVideoUrl: editUrl,
                TemplateCategory: editCategory // Update category as well
            });
            setSuccessMessage("Template Updated");
            getData();
            setEditId(null); // Reset edit mode
        } catch (error) {
            console.error('Error updating template: ', error);
        }
    };

    // Delete template logic
    const DeleteTemplate = async (id) => {
        try {
            const productRef = doc(db, 'templates', id);
            await deleteDoc(productRef);
            setSuccessMessage("Template Deleted");
            getData(); // Refresh data after deletion
        } catch (error) {
            console.error('Error deleting template: ', error);
        }
    };

    // Fetch all templates
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

    const handleEdit = (template) => {
        setEditId(template.id);
        setEditName(template.TemplateName);
        setEditDescription(template.TemplateDescription);
        setEditPrice(template.TemplatePrice);
        setEditUrl(template.TemplateVideoUrl);
        setEditCategory(template.TemplateCategory); // Set category for editing
    };

    const cancelEdit = () => {
        setEditId(null);
        setEditName("");
        setEditDescription("");
        setEditPrice("");
        setEditUrl("");
        setEditCategory("");
    };

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

    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center">All Templates</h2>
                <p className="text-center">Only Admin can update here:</p>
                <button type="button" className="btn btn-warning mb-3" onClick={() => window.location.href = '/addtemplate'}>
                    Add Template
                </button>
                {successMessage && <div className="alert alert-success mb-3 pb-lg-2 text-center">{successMessage}</div>}
                <div className="row justify-content-center">
                    {templates.map((template) => (
                        <div className="col-md-4 mb-4" key={template.id}>
                            <div className="card text-center">
                                <div className="card-body">
                                    {renderVideo(editId === template.id ? editUrl : template.TemplateVideoUrl)}
                                    <h5 className="card-title">{editId === template.id ? (
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                    ) : (
                                        template.TemplateName
                                    )}</h5>
                                    <p className="card-text">{editId === template.id ? (
                                        <textarea
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                        />
                                    ) : (
                                        template.TemplateDescription
                                    )}</p>
                                    <p className="card-text"><strong>Price:</strong> {editId === template.id ? (
                                        <input
                                            type="text"
                                            value={editPrice}
                                            onChange={(e) => setEditPrice(e.target.value)}
                                        />
                                    ) : (
                                        `₹${template.TemplatePrice}`
                                    )}</p>
                                    <div className="d-flex justify-content-between">
                                        {editId === template.id ? (
                                            <> 
                                                <Button variant="success" onClick={() => UpdateTemplate(template.id)}>Save</Button>{' '}
                                                <Button variant="success" onClick={() => cancelEdit()}>Close</Button>
                                            </>
                                        ) : (
                                            <Button variant="success" onClick={() => handleEdit(template)}>Edit</Button>
                                        )}
                                        {' '}
                                        <Button variant="danger" onClick={() => DeleteTemplate(template.id)}>Delete</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Viewtemplates;
