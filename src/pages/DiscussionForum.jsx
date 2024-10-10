import React from 'react';
import userProfile from '../image/Ellipse 2.png'; // Placeholder for user profile images
import postImage from '../image/sawah1.jpg'; // Placeholder for post images

const DiscussionForum = () => {
  return (
    <div className="discussion-forum">
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <img src={userProfile} alt="User Profile" className="header-profile" />
          <input type="text" placeholder="Apa yang ingin anda tanyakan atau bagikan?" className="header-input" />
          <div className="header-options">
            <button className="header-button">Media</button>
            <button className="header-button">Kegiatan</button>
            <button className="header-button">Teks</button>
          </div>
        </div>

        {/* Post */}
        <div className="post">
          <div className="post-header">
            <img src={userProfile} alt="Nadya Widdy Astuti" className="post-profile" />
            <div className="post-info">
              <h4>Nadya Widdy Astuti</h4>
              <p>Wisatawan · 1h</p>
            </div>
          </div>
          <p className="post-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s...
          </p>
          <img src={postImage} alt="Post Image" className="post-image" />
          <div className="post-stats">
            <p>1234 likes</p>
            <p>30 Comments</p>
          </div>
          <div className="post-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Repost</button>
            <button>Share</button>
          </div>
          <input type="text" placeholder="Tambahkan Komentar" className="post-comment-input" />
        </div>

        {/* Additional Posts (replicate for multiple posts) */}
        <div className="post">
          <div className="post-header">
            <img src={userProfile} alt="Nadya Widdy Astuti" className="post-profile" />
            <div className="post-info">
              <h4>Nadya Widdy Astuti</h4>
              <p>Wisatawan · 1h</p>
            </div>
          </div>
          <p className="post-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s...
          </p>
          <img src={postImage} alt="Post Image" className="post-image" />
          <div className="post-stats">
            <p>1234 likes</p>
            <p>30 Comments</p>
          </div>
          <div className="post-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Repost</button>
            <button>Share</button>
          </div>
          <input type="text" placeholder="Tambahkan Komentar" className="post-comment-input" />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        {/* Recommended Communities */}
        <div className="recommendations">
          <h3>Rekomendasi Komunitas</h3>
          <ul>
            <li>Explore Leuwi Malang - 3,450 member</li>
            <li>Komunitas Perkebunan - 25 member</li>
            <li>Komunitas Pertanian - 4,330 member</li>
            <li>Informasi Leuwi Malang - 2,345 member</li>
            <li>Belajar Bareng Pertanian - 3,333 member</li>
          </ul>
        </div>

        {/* Recommended Friends */}
        <div className="recommendations">
          <h3>Rekomendasi Teman</h3>
          <ul>
            <li>Jeiver Junior Lahiolotte - 234 followers</li>
            <li>Muhammad Fajar - 521 followers</li>
            <li>Nadya Widdy Astuti - 3,450 followers</li>
            <li>Grace Sihotang - 241 followers</li>
            <li>Arif Winanda Lubis - 333 followers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
