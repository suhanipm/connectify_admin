import Nav from "./Nav";
import { useState } from "react";
import "../css/Addstaff.css";

function AddStaff() {
    const [name, setName] = useState("");         // Initialize with empty string
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStaff = {
            name, email, department, mobile
        };

        try {
            const response = await fetch('http://localhost:5038/api/social_media/admin/addstaff', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStaff),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Staff added successfully! ID: ' + data.staff._id); // Show ID of added staff
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
                console.log(response);
            }
        } catch (error) {
            console.error('Error Adding Staff:', error);
        }
    };

    return (
        <div className="edit_staff_container">
            <Nav />
            <div>
                <div className="profile-settings">
                    {/* <h2>Add Staff</h2>
                    <Link to={`/Addstudent`}><button className="edit-button">Addstudent</button></Link> */}

                    <div className="edit-profile">
                        <form className="profile-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <textarea
                                id="name"
                                placeholder="Staff Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></textarea>

                            <label htmlFor="department">Department</label>
                            <textarea
                                id="department"
                                placeholder="Department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            ></textarea>

                            <label htmlFor="email">Email</label>
                            <textarea
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></textarea>

                            <label htmlFor="mobile">Mobile</label>
                            <textarea
                                id="mobile"
                                placeholder="Mobile Number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            ></textarea>

                            <button type="submit" className="submit-btn">Add Staff</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStaff;
