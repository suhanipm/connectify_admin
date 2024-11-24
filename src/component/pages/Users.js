import React, { useState, useEffect } from 'react';
import '../css/User.css';
import Nav from './Nav';
const User = () => {
  // Sample user data (replace with actual data from a backend API)
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/admin/users');
        const data = await response.json();
        console.log(data);
        setUsers(data.users); // Assuming API returns { users: [...] }
      } catch (error) {
        setError("Error fetching user data");
        console.error('Error:', error);
      }
    };
    fetchUsers();
  },
  []);

  // Function to handle deleting a user
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5038/api/social_media/admin/deleteuser/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('user deleted successfully');
        setUsers(users.filter((user) => user._id !== userId)); // Update the list after deletion
      } else {
        const result = await response.json();
        alert(result.message || 'Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

   // Function to handle blocking a user
const handleBlock = (userId) => {
  fetch(`http://localhost:5038/api/social_media/admin/blockuser/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
      if (data.message === 'User already blocked') {
        alert(data.message);
      } else if (data.message === 'User blocked successfully') {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error blocking user:', error);
      alert('Failed to block user');
    });
};

  // Function to handle editing a user
  // const handleEdit = (index) => {
  //   const updatedFullName = prompt('Enter the new full name', users[index].fullName);
  //   const updatedEmail = prompt('Enter the new email', users[index].email);
  //   const updatedMobile = prompt('Enter the new mobile', users[index].mobile);
  //   const updatedProfilePic = prompt('Enter the new profile picture URL', users[index].profilePic);

  //   const updatedUsers = users.map((user, i) =>
  //     i === index
  //       ? { ...user, fullName: updatedFullName, email: updatedEmail, mobile: updatedMobile, profilePic: updatedProfilePic }
  //       : user
  //   );
  //   setUsers(updatedUsers);
  // };

  return (
    <div className='user-container'>
      <Nav/>
      
      <div className='table'>
      <h2>Manage User Data</h2>
      
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Username</th>
            <th>Delete</th> 
            <th>Block</th>
            {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              
              <td>
                 {user.profile_pic ? (
                  <img src={user.profile_pic} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    ) : (
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc' }} />
                     )}
              </td>

      
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.username}</td>
              <td>
                
                <button onClick={() => handleDelete(user._id)} className="delete-button">Delete</button>
              </td> {/* Edit and Delete buttons */}
              <td>
                <button onClick={() => handleBlock(user._id)} className="delete-button">Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    
  );
};

export default User;
