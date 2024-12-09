import React, { useState, useEffect } from 'react';
import '../css/Group.css'; // Ensure this CSS file exists for styling
import Nav from './Nav';
import { Link } from 'react-router-dom';


function Group() {
    const [groups, setGroups] = useState([]);

    // Fetch groups from the backend
    useEffect(() => {
        fetch('http://localhost:5038/api/social_media/admin/groups')
            .then((res) => res.json())
            .then((data) => {
                if (data.groups) {
                    setGroups(data.groups);
                } else {
                    alert(data.message || "No groups found.");
                }
            })
            .catch((err) => console.error("Error fetching groups:", err));
    }, []);

    return (
        <div>
          <Nav/>
          <Link to={`/Creategroup`}>
            <button className="add-button">Create a group</button>
          </Link>
            <h2>Created Groups</h2>
            {groups.length > 0 ? (
                <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Group Name</th>
                            <th>Created At</th>
                            <th>Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group, index) => (
                            <tr key={index}>
                                <td>{group.groupName}</td>
                                <td>{new Date(group.createdAt).toLocaleString()}</td>
                                <td>
                                    {group.users.map((user) => user.name).join(", ")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No groups have been created yet.</p>
            )}
        </div>
    );
}

export default Group;
