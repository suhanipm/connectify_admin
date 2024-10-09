import Nav from "./Nav";
import { useState } from "react";
import "../css/Editstudent.css";
import { useParams } from "react-router-dom";

function Editstudent(){
    const {_id}= useParams
    const[name, setname] = useState();
    const[email, setemail] = useState();
    const[mobile, setmobile] = useState();
    const[gender, setGender] = useState();
    const[dateOfBirth, setDateOfBirth] = useState();
    const[usn, setusn] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = {
            _id,
            gender,
            dateOfBirth,
            name,
            email,
            mobile,
            usn
             
        };
      
        try {
            const response = await fetch('http://localhost:5038/api/social_media/update_student', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProfile),
            });
      
            if (response.ok) {
                alert('Profile updated successfully!');
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
                console.log(response);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
      };

    return(
        <div className="edit_student_container">
          <Nav/>
          <div>
          <div className="profile-settings">
        <h2>Edit student</h2>

        <div className="edit-profile">

          <form className="profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <textarea
              id="name"
              placeholder="name"
            //   maxLength="150"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></textarea>

            <label htmlFor="email">email</label>
            <textarea
              id="email"
              placeholder="email"
              maxLength="50"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></textarea>

            <label htmlFor="mobile">Mobile</label>
            <textarea
              id="mobile"
              placeholder="mobile"
              maxLength="50"
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
              value={usn}
              onChange={(e) => setusn(e.target.value)}
            >
         
            </input>

            <button type="submit" className="submit-btn">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  

</div>
    

    );
}
export default Editstudent;