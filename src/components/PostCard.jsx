import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';

function PostCard({ post }) {
  return (
    <article className="post-card">
      <header className="post-header">
        <div className="user-meta">
          <img src={post.user.profilePicture} alt={post.user.username} />
          <div>
            <strong>{post.user.username}</strong>
            <small>{post.location}</small>
          </div>
        </div>
        <button type="button" className="ghost-button" aria-label="More options">
          <FiMoreHorizontal />
        </button>
      </header>

      <img className="post-image" src={post.image} alt={post.caption} />

      <div className="post-actions">
        <div className="action-group">
          <button type="button" className={`icon-button ${post.liked ? 'liked' : ''}`} aria-label="Like post">
            <FiHeart />
          </button>
          <button type="button" className="icon-button" aria-label="Comment on post">
            <FiMessageCircle />
          </button>
          <button type="button" className="icon-button" aria-label="Share post">
            <FiSend />
          </button>
        </div>
        <button type="button" className={`icon-button ${post.saved ? 'saved' : ''}`} aria-label="Save post">
          <FiBookmark />
        </button>
      </div>

      <div className="post-metadata">
        <strong>{post.likes.toLocaleString()} likes</strong>
        <p>
          <span>{post.user.username}</span> {post.caption}
        </p>
        <div className="comment-list">
          {post.comments.map((comment) => (
            <p key={comment.id}>
              <strong>{comment.user.username}</strong> {comment.text}
            </p>
          ))}
        </div>
        <small>3 hours ago</small>
      </div>
    </article>
  );
}

export default PostCard;
