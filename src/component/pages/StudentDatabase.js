import React, { useState } from 'react';
import '../css/StudentDatabase.css';

const StudentDatabase = () => {
  // Sample data (you can replace this with actual data from a backend API)
  const [students, setStudents] = useState([
    { name: 'John Doe', usn: '1MS17CS001', email: 'john@example.com', phone: '1234567890', branch: 'CSE' },
    { name: 'Jane Smith', usn: '1MS17EC002', email: 'jane@example.com', phone: '0987654321', branch: 'ECE' },
  ]);

  // Function to handle deleting a student
  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  // Function to handle editing a student
  const handleEdit = (index) => {
    const updatedName = prompt('Enter the new name', students[index].name);
    const updatedEmail = prompt('Enter the new email', students[index].email);
    const updatedPhone = prompt('Enter the new phone', students[index].phone);

    const updatedStudents = students.map((student, i) =>
      i === index
        ? { ...student, name: updatedName, email: updatedEmail, phone: updatedPhone }
        : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>Manage Student Database</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>USN</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.usn}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.branch}</td>
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

export default StudentDatabase;
