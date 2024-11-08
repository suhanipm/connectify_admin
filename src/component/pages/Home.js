import '../css/Home.css';
import Nav from './Nav';


function Home() {
  
return (
    <div className='homecontainer'>
      <Nav />
      <div className="card-container">
        <div className="info-card">
          <h1>STUDENT NUMBER</h1>
        </div>
        <div className="info-card">
          <h1>POST NUMBER</h1>
        </div>
        <div className="info-card">
          <h1>ACCOUNT NUMBER</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
