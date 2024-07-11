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
                    width="200"
                    height="100"
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

                <h2>All Templates</h2>
                <p>Only Admin can update here:</p>
                <button type="button" className="btn btn-warning" onClick={() => window.location.href = '/addtemplate'}>
            Add Template
          </button>
                {successMessage && <div className="alert alert-success mb-3 pb-lg-2">{successMessage}</div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Template Name</th>
                            <th>Template Description</th>
                            <th>Template Video</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((template) => (
                            <tr key={template.id}>
                                <td>{template.id}</td>
                                <td>{editId === template.id ? (
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                                ) : (
                                    template.TemplateName
                                )}</td>
                                <td>{editId === template.id ? (
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                    />
                                ) : (
                                    template.TemplateDescription
                                )}</td>
                                <td>
                                    {editId === template.id ? (
                                        <input
                                            type="text"
                                            value={editUrl}
                                            onChange={(e) => setEditUrl(e.target.value)}
                                        />
                                    ) : (
                                        renderVideo(template.TemplateVideoUrl)
                                    )}
                                </td>
                                <td>{editId === template.id ? (
                                    <input
                                        type="text"
                                        value={editPrice}
                                        onChange={(e) => setEditPrice(e.target.value)}
                                    />
                                ) : (
                                    `₹${template.TemplatePrice}`
                                )}</td>
                                <td>{editId === template.id ? (
                                    <select
                                        className="form-control"
                                        value={editCategory}
                                        onChange={(e) => setEditCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Birthday">Birthday Templates</option>
                                        <option value="Wedding">Wedding Invitation Templates</option>
                                        <option value="Engagement">Engagement Invitation Templates</option>
                                        <option value="Other">Other</option>
                                    </select>
                                ) : (
                                    template.TemplateCategory
                                )}</td>
                                <td>
                                    {editId === template.id ? (
                                        <>
                                            <Button variant="success" onClick={() => UpdateTemplate(template.id)}>Save</Button>{' '}
                                            <Button variant="secondary" onClick={() => cancelEdit()}>Cancel</Button>
                                        </>
                                    ) : (
                                        <Button variant="primary" onClick={() => handleEdit(template)}>Edit</Button>
                                    )}
                                    {' '}
                                    <Button variant="danger" onClick={() => DeleteTemplate(template.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Viewtemplates;
