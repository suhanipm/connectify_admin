import React, { useState } from 'react';
import '../css/StudentDatabase.css';

const StudentDatabase = () => {
  // Sample data (you can replace this with actual data from a backend API)
  const [students, setStudents] = useState([
    { name: 'John Doe', usn: '1MS17CS001', email: 'john@example.com', phone: '1234567890', branch: 'CSE' },
    { name: 'Jane Smith', usn: '1MS17EC002', email: 'jane@example.com', phone: '0987654321', branch: 'ECE' },
  ]);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDatabase;
