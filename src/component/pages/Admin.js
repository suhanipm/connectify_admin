import React, { useState, useEffect } from 'react';
import '../css/Admin.css'; // Global CSS file
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/admin');
        const data = await response.json();
        if (data && data.admins) {
          setAdmins(data.admins);
        } else {
          setError("No admins found");
        }
      } catch (error) {
        setError("Error fetching admin data");
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  return (
    <div className="admin-container">
      <Nav />
      <div className="admin-list">
        <div className="add-admin">
          <Link to={`/Addadmin`}>
            <button className="add-button">Add Admin</button>
          </Link>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th className="admin-th">Name</th>
                <th className="admin-th">Email</th>
                <th className="admin-th">Password</th>
                <th className="admin-th">Phone</th>
              </tr>
            </thead>
            <tbody>
              {admins.length > 0 ? (
                admins.map((admin) => (
                  <tr key={admin._id}>
                    <td className="admin-td">{admin.name}</td>
                    <td className="admin-td">{admin.email}</td>
                    <td className="admin-td">{admin.password}</td>
                    <td className="admin-td">{admin.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="admin-td">
                    No admins found
                  </td>
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
