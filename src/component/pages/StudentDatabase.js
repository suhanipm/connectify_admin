import React, { useState, useEffect } from 'react';
import '../css/StudentDatabase.css';
import Nav from './Nav';

const StudentDatabase = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the students from the API when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/admin/students');
        const data = await response.json();
        console.log(data);
        setStudents(data.students); // Assuming API returns { students: [...] }
      } catch (error) {
        setError("Error fetching student data");
        console.error('Error:', error);
      }
    };
    fetchStudents();
  }, []);

  // Function to handle the delete request
  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:5038/api/social_media/admin/deletestudent/${studentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Student deleted successfully');
        setStudents(students.filter((student) => student._id !== studentId)); // Update the list after deletion
      } else {
        const result = await response.json();
        alert(result.message || 'Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student');
    }
  };

  return (
    <div className='student_database_container'>
      <Nav />
      <h2>Manage Student Database</h2>

      {error && <p className="error">{error}</p>}

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>USN</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.usn}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(student._id)} // Pass the student's ID to the delete handler
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDatabase;
