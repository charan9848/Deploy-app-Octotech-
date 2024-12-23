import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

const Customerapplications = () => {
    const [customers, setCustomers] = useState([]);
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message

    const getData = async () => {
        try {
            const customersRef = collection(db, "customers");
            const snapshot = await getDocs(customersRef);
            const data = snapshot.docs.map(doc => {
                const docData = doc.data();
                console.log(docData); // Debugging: Log document data to console
                return {
                    id: doc.id,
                    ...docData,
                    createdAt: docData.createdAt ? docData.createdAt.toDate() : null // Convert Firestore Timestamp to JS Date
                };
            });
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "customers", id));
            setCustomers(customers.filter(customer => customer.id !== id)); // Update state after deletion
            setSuccessMessage('Customer application successfully deleted!'); // Set success message
            setTimeout(() => {
                setSuccessMessage(''); // Clear the success message after 3 seconds
            }, 3000);
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Helper function to format date and time
    const formatDateTime = (date) => {
        if (!date) return 'N/A';
        return date.toLocaleString(); // Formats date to local string representation
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Customer Applications</h2>
            {successMessage && <div className="alert alert-success mb-3 text-center">{successMessage}</div>}
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>WhatsApp Number</th>
                            <th>Template Name</th>
                            <th>Category</th>
                            <th>Email</th>
                            <th>State</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.whatsappNumber}</td>
                                <td>{customer.templateName}</td>
                                <td>{customer.category}</td>
                                <td>{customer.email}</td>
                                <td>{customer.state}</td>
                                <td>{formatDateTime(customer.createdAt)}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => handleDelete(customer.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customerapplications;
