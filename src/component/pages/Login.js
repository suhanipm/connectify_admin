import '../css/Login.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  // State to manage input values
  const [credentials, setCredentials] = useState({
    mobileOrEmailOrUsername: '',
    password: ''
  });

  const navigate = useNavigate();  // For navigating after login

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
    console.log('Credentials:', credentials); // Debugging purpose
    try {
        const response = await axios.post(
            'http://localhost:5038/api/social_media/addadmin/login',
            credentials
        );

        if (response.status === 200) {
            console.log('Login success:', response.data);
            navigate('/home');
        }
    } catch (error) {
        console.error('Login failed:', error.response?.data || error);
        alert(error.response?.data?.message || 'Login failed');
    }
};


  return (
    <div>
      <div className="main-container-login">
        <div className="box1">
          <div className="heading">
            {/* Optional logo or background */}
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="field">
              <input
                id="mobileOrEmailOrUsername"
                type="text"
                name="mobileOrEmailOrUsername"
                value={credentials.mobileOrEmailOrUsername}
                onChange={handleChange}
                required
              />
              <label htmlFor="mobileOrEmailOrUsername">Admin Email or Phone</label>
            </div>
            <div className="field">
              <input
                id="password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="login-button" title="login">Log In</button>
          </form>
        </div>
        <div className="box2">
          {/* You can add any other content like a footer or logo here */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
