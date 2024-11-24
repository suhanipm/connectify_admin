import React, { useState, useEffect } from 'react';
import '../css/Post.css';
import Nav from './Nav';

function Post() {
  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts
  useEffect(() => {
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

  // Function to handle blocking a user
const handleBlock = (userId) => {
  fetch(`http://localhost:5038/api/social_media/admin/blockuser/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
      if (data.message === 'User already blocked') {
        alert(data.message);
      } else if (data.message === 'User blocked successfully') {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error blocking user:', error);
      alert('Failed to block user');
    });
};


  return (
    <div className='post-container'>
      <Nav />
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="post">
              <div className="post-header">
                <div>
                  <img className="profile-picture" src={post.user.profile_pic} alt="" />
                </div>
                <div className="profile-info">
                  <p>{post.user.username}</p>
                  <span>{post.location}</span>
                </div>
              </div>
              <div className="post-image">
                {post.mediaType === 'image' ? (
                  <img className="post-photos" src={`http://localhost:5038${post.fileUrl}`} alt={post.caption} />
                ) : (
                  <video className="post-photos" controls autoPlay loop muted>
                    <source src={`http://localhost:5038${post.fileUrl}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className='postDescription'>
                <p className='captions'>{post.caption}</p>
                <div className='likeandcomment'>
                  <button className='delete-button'>Delete</button>
                  <button className='delete-button' onClick={() => handleBlock(post.user._id)}>Block</button>
                </div>
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
