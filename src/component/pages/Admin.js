import React, { useState, useEffect } from 'react';
import '../css/Admin.css'; // Ensure this CSS file exists for styling
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the admins from the API when the component mounts
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/admin/admins');
        const data = await response.json();
        if (data && data.admins) {
          setAdmins(data.admins); // Only set if data.admins exists
        } else {
          setError("No admins found");
        }
      } catch (error) {
        setError("Error fetching admin data");
        console.error('Error:', error);
      } finally {
        setLoading(false); // Stop loading after the fetch completes
      }
    };
    fetchAdmins();
  }, []);

  return (
    <div className='admin_database_container'>
      <Nav />
      <div className='admin_list'>
        <div className='Addadmin'>
          <h1>Manage Admin Database</h1>
          <Link to={`/Addadmin`}>
            <button className="add-button">Add Admin</button>
          </Link>
        </div>             

        {/* Display loading, error or the admin table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {admins.length > 0 ? (
                admins.map((admin) => (
                  <tr key={admin._id}>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.password}</td>
                    <td>{admin.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No admins found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
