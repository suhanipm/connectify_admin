import Nav from "./Nav";
import { useState } from "react";
import "../css/Editadmin.css"; // Make sure to create a corresponding CSS file for styling

function Addadmin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAdmin = {
            name, email, password, phoneNumber
        };

        try {
            const response = await fetch('http://localhost:5038/api/social_media/admin/addadmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAdmin),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Admin added successfully! ID: ' + data.admin._id);
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error Adding Admin:', error);
        }
    };

    return (
        <div className="edit_admin_container">
            <Nav />
            <div>
                <div className="profile-settings">
                    <h2>Add Admin</h2>
                    <div className="edit-profile">
                        <form className="profile-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Admin Name</label>
                            <textarea
                                id="name"
                                placeholder="Admin Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></textarea>

                            <label htmlFor="email">Email</label>
                            <textarea
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></textarea>

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <label htmlFor="phoneNumber">Phone Number</label>
                            <textarea
                                id="phoneNumber"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            ></textarea>

                            <button type="submit" className="submit-btn">Add Admin</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addadmin;
