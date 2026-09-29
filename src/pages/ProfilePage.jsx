import { posts, users } from '../data/mockData';

const profile = users[0];

function ProfilePage() {
  return (
    <div className="page-shell profile-page">
      <header className="profile-header-card">
        <img src={profile.profilePicture} alt={profile.username} className="profile-cover" />
        <div className="profile-info">
          <div className="profile-avatar-block">
            <img src={profile.profilePicture} alt={profile.username} className="profile-avatar" />
          </div>

          <div className="profile-summary">
            <div className="profile-title-row">
              <h1>{profile.username}</h1>
              <button type="button" className="outline-button">Edit Profile</button>
            </div>

            <div className="stat-row">
              <span><strong>{profile.posts}</strong> posts</span>
              <span><strong>{profile.followers.toLocaleString()}</strong> followers</span>
              <span><strong>{profile.following}</strong> following</span>
            </div>

            <div>
              <h2>{profile.fullName}</h2>
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="tabs-row">
        <button type="button" className="tab active">Posts</button>
        <button type="button" className="tab">Saved</button>
        <button type="button" className="tab">Tagged</button>
      </div>

      <div className="profile-grid">
        {posts.map((post) => (
          <div key={post.id} className="profile-grid-item">
            <img src={post.image} alt={post.caption} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
