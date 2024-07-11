import React from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';

const AllTemplates = () => {
  const [templates, setTemplates] = useState([]);

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
  return (
    <div>
      <div className="container mt-5">
           
            <table className="table table-striped">
               
                <tbody>
                    {templates.map((template) => (
                        <tr key={template.id}>

                            <td>{template.TemplateName}</td>
                            <td>{template.TemplateDescription}</td>
                            <td>{template.TemplateVideoUrl}</td>
                            <td>₹{template.TemplatePrice}</td>
                            <td>{template.TemplateCategory}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AllTemplates
