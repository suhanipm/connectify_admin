import Nav from "./Nav";
import { useState } from "react";
import "../css/Editstudent.css";

function Addstudent() {
    const [name, setname] = useState("");         // Initialize with empty string
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [gender, setGender] = useState("male"); // You might want to set a default value like "male"
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [usn, setusn] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = {
            name, email, mobile, gender, dateOfBirth, usn
        };
    
        try {
            const response = await fetch('http://localhost:5038/api/social_media/admin/addstudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProfile),
            });
    
            if (response.ok) {
                const data = await response.json();
                alert('Student added successfully! ID: ' + data.student._id); // Show ID of added student
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
                console.log(response);
            }
        } catch (error) {
            console.error('Error Adding Student:', error);
        }
    };
    

    return (
        <div className="edit_student_container">
            <Nav />
            <div>
                <div className="profile-settings">
                    <h2>Add student</h2>
                    <div className="edit-profile">
                        <form className="profile-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <textarea
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            ></textarea>

                            <label htmlFor="email">Email</label>
                            <textarea
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            ></textarea>

                            <label htmlFor="mobile">Mobile</label>
                            <textarea
                                id="mobile"
                                placeholder="Mobile"
                                value={mobile}
                                onChange={(e) => setmobile(e.target.value)}
                            ></textarea>

                            <label htmlFor="gender">Gender</label>
                            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <label htmlFor="date_of_birth">Date of Birth</label>
                            <input
                                type="date"
                                id="date_of_birth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />

                            <label htmlFor="usn">USN</label>
                            <input
                                id="usn"
                                placeholder="USN"
                                value={usn}
                                onChange={(e) => setusn(e.target.value)}
                            />

                            <button type="submit" className="submit-btn">Add Student</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addstudent;