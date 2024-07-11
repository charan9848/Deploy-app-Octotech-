import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const Customerapplications = () => {
    const [customers, setCustomers] = useState([]);

    const getData = async () => {
        try {
            const customersRef = collection(db, "customers");
            const snapshot = await getDocs(customersRef);
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mt-5" >
            <h2>Customer Applications</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>WhatsApp Number</th>
                        <th>Template Name</th>
                        <th>Category</th>
                        <th>Email</th>
                        <th>State</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customerapplications;
