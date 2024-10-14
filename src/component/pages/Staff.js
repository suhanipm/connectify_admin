import React, { useState, useEffect } from 'react';
import '../css/Staff.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';


const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/admin/staff');
        const data = await response.json();
        console.log(data);
        setStaff(data.staff); // Assuming API returns { staff: [...] }
      } catch (error) {
        setError("Error fetching staff data");
        console.error('Error:', error);
      }
    };
    fetchStaff();
  }, []);

  // Function to handle deleting a staff member
  const handleDelete = async (staffId) => {
    try {
      const response = await fetch(`http://localhost:5038/api/social_media/admin/deletestaff/${staffId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Staff deleted successfully');
        setStaff(staff.filter((member) => member._id !== staffId)); // Update the list after deletion
      } else {
        const result = await response.json();
        alert(result.message || 'Failed to delete staff');
      }
    } catch (error) {
      console.error('Error deleting staff:', error);
      alert('Error deleting staff');
    }
  };

  // Function to handle editing a staff member
  const handleEdit = (index) => {
    const updatedName = prompt('Enter the new staff name', staff[index].name);
    const updatedBranch = prompt('Enter the new branch', staff[index].branch);
    const updatedMobile = prompt('Enter the new mobile number', staff[index].mobile);
    const updatedEmail = prompt('Enter the new email', staff[index].email);

    const updatedStaff = staff.map((member, i) =>
      i === index
        ? { ...member, name: updatedName, branch: updatedBranch, mobile: updatedMobile, email: updatedEmail }
        : member
    );
    setStaff(updatedStaff);
  };

  return (
    <div className='staff-container'>
      <Nav/>
      
      <div className='table'>
      <h2>Manage Staff Data</h2>
      <Link to={`/Addstaff`}><button className="edit-button">Add staff</button></Link>

      
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Branch</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th> {/* Column for actions */}
          </tr>
        </thead>
        <tbody>
          {staff.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.branch}</td>
              <td>{member.mobile}</td>
              <td>{member.email}</td>
              <td>
                
                <button onClick={() => handleDelete(member._id)} className="delete-button">Delete</button>
              </td> {/* Edit and Delete buttons */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Staff;
