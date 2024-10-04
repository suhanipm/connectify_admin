import '../css/Login.css';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Login() {
  // State to manage input values
  const [credentials, setCredentials] = useState({
    mobileOrEmailOrUsername: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual login API endpoint
      const response = await axios.post('https://your-api-url.com/login', credentials);
      console.log('Login success:', response.data);
      // Perform login actions (e.g., navigate to a different page, store token, etc.)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <div className="main-container-login">
        <div className="box1">
          <div className="heading">
            {/* <h1 className="instagram-logo">Instagram</h1> */}
            {/* You can uncomment and use a background video here */}
            {/* <video autoPlay muted loop id="background-video">
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className='field'>
              <input
                id='adminname'
                type="text"
                name="adminname"
                value={credentials.mobileOrEmailOrUsername}
                onChange={handleChange}
                required
              />
              <label htmlFor='adminname'>Admin name</label>
            </div>
            <div className='field'>
              <input
                id='password'
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <label htmlFor='password'>Password</label>
            </div>
            <button className="login-button" title="login">Log In</button>
          </form>
        </div>
        <div className="box2">
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
