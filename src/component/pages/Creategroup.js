import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../css/Group.css";

function Creategroup() {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [groupName, setGroupName] = useState("");

    // Fetch all users from the backend
    useEffect(() => {
        fetch('http://localhost:5038/api/social_media/admin/users')
            .then((res) => res.json())
            .then((data) => setUsers(data.users))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    // Add or remove a user from the selectedUsers list
    const handleSelectUser = (userId) => {
        setSelectedUsers((prevSelected) =>
            prevSelected.includes(userId)
                ? prevSelected.filter((id) => id !== userId) // Remove if already selected
                : [...prevSelected, userId] // Add if not already selected
        );
    };

    // Submit group data to the backend
    const createGroup = () => {
        if (!groupName.trim()) {
            alert("Please enter a group name.");
            return;
        }
        if (selectedUsers.length === 0) {
            alert("Please select at least one user.");
            return;
        }

        fetch('http://localhost:5038/api/social_media/admin/groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ groupName, users: selectedUsers }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.message);
                setGroupName(""); // Reset the group name
                setSelectedUsers([]); // Clear selected users
            })
            .catch((err) => console.error("Error creating group:", err));
    };

    return (
        <div style={{ padding: "20px" }}>
            <Nav/>
            <h1>Create a Group</h1>

            {/* Group Name Input */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                    }}
                />
            </div>

            {/* User List Table */}
            <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
    {users.map((user) => (
        <tr key={user._id}>
            <td>{user.fullName|| "No Name Provided"}</td> {/* Fallback for missing names */}
            <td>{user.email}</td>
            <td>
                <button
                    onClick={() => handleSelectUser(user._id)}
                    style={{
                        padding: "5px 10px",
                        backgroundColor: selectedUsers.includes(user._id)
                            ? "green"
                            : "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    {selectedUsers.includes(user._id) ? "Selected" : "Select"}
                </button>
            </td>
        </tr>
    ))}
</tbody>

            </table>

            {/* Submit Button */}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={createGroup}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Create Group
                </button>
            </div>
        </div>
    );
}

export default Creategroup;
