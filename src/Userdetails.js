import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Userdetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const userSnapshot = await getDocs(usersCollection);
        const usersList = userSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error('Error getting users:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId));
      setUsers(users.filter((user) => user.id !== userId));
      setSuccessMessage('User deleted successfully!');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error deleting user:', error);
      setError(error);
    }
  };

  // Function to format Firestore Timestamp
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp.seconds * 1000); // Convert Firestore Timestamp to JavaScript Date
    return date.toLocaleString(); // Format as local date and time string
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">User Details</h2>
      {successMessage && (
        <div className="alert alert-success mb-3 text-center">{successMessage}</div>
      )}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">Error fetching users: {error.message}</p>}
      <div className="row justify-content-center">
        {users.map((user, index) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">{user.firstname} {user.lastname}</h5>
                <p className="card-text text-center">Email: {user.email}</p>
                <p className="card-text text-center">Date Created: {formatTimestamp(user.createdAt)}</p>
                <div className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userdetails;
