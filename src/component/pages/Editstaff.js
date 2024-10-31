import Nav from "./Nav";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditStaff() {
    const { id } = useParams(); // Assuming URL contains the staff ID
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [mobile, setMobile] = useState("");

    // Fetch existing staff data
    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                const response = await fetch(`http://localhost:5038/api/social_media/admin/staff/${id}`);
                const data = await response.json();
                if (data.staff) {
                    setName(data.staff.name);
                    setEmail(data.staff.email);
                    setDepartment(data.staff.department);
                    setMobile(data.staff.mobile);
                }
            } catch (error) {
                console.error("Error fetching staff data:", error);
            }
        };
        fetchStaffData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedStaff = {
            id,
            name,
            email,
            department,
            mobile
        };

        try {
            const response = await fetch(`http://localhost:5038/api/social_media/admin/updatestaff`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedStaff),
            });

            if (response.ok) {
                alert("Staff profile updated successfully!");
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error updating staff profile:", error);
        }
    };

    return (
        <div className="edit_staff_container">
            <Nav />
            <div className="profile-settings">
                <h2>Edit Staff</h2>
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

                        <button type="submit" className="submit-btn">Update Staff</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditStaff;
