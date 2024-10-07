import React, { useState } from 'react';
import '../css/User.css';
import Nav from './Nav';
const User = () => {
  // Sample user data (replace with actual data from a backend API)
  const [users, setUsers] = useState([
    {
      mobile: '7619683507',
      email: 'rakshitabalikai@gmail.com',
      fullName: 'Rakshita Balikai',
      username: 'rakshii',
      profilePic: '', // Add a default or example profile picture URL
    },
    {
      mobile: '9876543210',
      email: 'anotheruser@gmail.com',
      fullName: 'Another User',
      username: 'user123',
      profilePic: '', // Add a default or example profile picture URL
    },
  ]);

  // Function to handle deleting a user
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  // Function to handle editing a user
  const handleEdit = (index) => {
    const updatedFullName = prompt('Enter the new full name', users[index].fullName);
    const updatedEmail = prompt('Enter the new email', users[index].email);
    const updatedMobile = prompt('Enter the new mobile', users[index].mobile);
    const updatedProfilePic = prompt('Enter the new profile picture URL', users[index].profilePic);

    const updatedUsers = users.map((user, i) =>
      i === index
        ? { ...user, fullName: updatedFullName, email: updatedEmail, mobile: updatedMobile, profilePic: updatedProfilePic }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Nav/>
      <h2>Manage User Data</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Username</th>
            <th>Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user.profilePic ? (
                  <img src={user.profilePic} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                ) : (
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                )}
              </td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
              </td> {/* Edit and Delete buttons */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
