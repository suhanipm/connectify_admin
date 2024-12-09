import React, { useState, useEffect } from 'react';
import '../css/Group.css'; // Ensure this CSS file exists for styling
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Group = () => {
  const [groups, setGroup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the groups from the API when the component mounts
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/groups'); // Update with the correct API endpoint
        const data = await response.json();
        if (data && data.groups) {
          setGroup(data.groups); // Only set if data.groups exists
        } else {
          setError("No groups found");
        }
      } catch (error) {
        setError("Error fetching group data");
        console.error('Error:', error);
      } finally {
        setLoading(false); // Stop loading after the fetch completes
      }
    };
    fetchGroup();
  }, []);

  return (
    <div className='groups_database_container'>
      <Nav />
      <div className='groups_list'>
        <div className='createGroup'>
          <Link to={`/CreateGroup`}>
            <button className="create-button">Create Group</button>
          </Link>
        </div>

        {/* Display loading, error or the groups table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Created By</th>
                <th>Number of Members</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.length > 0 ? (
                groups.map((group) => (
                  <tr key={group._id}>
                    <td>{group.name}</td>
                    <td>{group.createdBy}</td>
                    <td>{group.members.length}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() => console.log(`View group: ${group.name}`)}
                      >
                        View
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => console.log(`Delete group: ${group.name}`)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No groups found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Group;
