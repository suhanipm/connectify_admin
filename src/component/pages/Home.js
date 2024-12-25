import '../css/Home.css';
import Nav from './Nav';
import { useState, useEffect } from 'react';

function Home() {
  const [stats, setStats] = useState(null); // State to store stats data
  const [error, setError] = useState(""); // State to handle errors

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5038/api/social_media/stats'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStats(data); // Assuming API returns { userCount, studentCount, postCount }
      } catch (error) {
        setError("Error fetching stats");
        console.error('Error:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className='homecontainer'>
      <Nav />
      <div className="card-container">
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : stats ? (
          <>
            <div className="info-card">
              <h1>STUDENT NUMBER</h1>
              <h2>{stats.studentCount}</h2>
            </div>
            <div className="info-card">
              <h1>POST NUMBER</h1>
              <h2>{stats.postCount}</h2>
            </div>
            <div className="info-card">
              <h1>ACCOUNT NUMBER</h1>
              <h2>{stats.userCount}</h2>
            </div>
          </>
        ) : (
          <p>Loading statistics...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
