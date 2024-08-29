import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Import deleteDoc and doc

const Userdetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

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

  // Function to handle user deletion
  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId)); // Delete user from Firestore
      setUsers(users.filter((user) => user.id !== userId)); // Update local state to remove the user
      setSuccessMessage('User deleted successfully!'); // Set success message

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error deleting user:', error);
      setError(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Details</h2>
      {successMessage && <div className="alert alert-success mb-3 pb-lg-2">{successMessage}</div>} {/* Display success message */}
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching users: {error.message}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th> {/* Changed header from ID to # */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td> {/* Display sequential number instead of user.id */}
              <td>{user.firstname || 'N/A'}</td> {/* Field name should match Firestore */}
              <td>{user.lastname || 'N/A'}</td> {/* Field name should match Firestore */}
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)} // Call delete function on button click
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userdetails;
