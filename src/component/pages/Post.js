import React, { useState, useEffect } from 'react';
import '../css/Post.css';
import Nav from './Nav';


function Post(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    fetch('http://localhost:5038/api/social_media/posts')
      .then(response => {
        if (response.headers.get('content-type').includes('application/json')) {
          return response.json();
          
        } else {
          throw new Error('Posts response is not JSON');
        }
      })
      .then(data => setPosts(data))
      .catch(error => {
        console.error('Error fetching posts:', error);
        alert('Failed to load posts');
      });
  }, []);


  return(
    <div className='post-container'>
              {/* Post */}
              <Nav></Nav>
              <div className="posts">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="post autoshow">
                <div className="post-header">
                  <div className="profile-picture"></div>
                  <div className="profile-info">
                    <p>{post.username}</p>
                    <span>{post.location}</span>
                  </div>
                </div>
                <div className="post-image">
                  {post.file && post.file.startsWith("data:image") ? (
                    <img src={post.file} alt={post.caption} />
                  ) : (
                    <video autoPlay loop muted>
                      <source src={post.file} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className='postDescription'>
                <p className='captions'>{post.caption}</p>
                {/* <button className='menu-button'><img src={like} alt="Home" /></button> */}
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
   
  );
}

export default Post;