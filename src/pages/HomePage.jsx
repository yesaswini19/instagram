import StoryBar from '../components/StoryBar';
import PostCard from '../components/PostCard';
import { posts } from '../data/mockData';

function HomePage() {
  return (
    <div className="feed-page">
      <header className="page-header mobile-only">
        <h1>Home</h1>
        <button type="button" className="ghost-button">Inbox</button>
      </header>

      <StoryBar />

      <div className="feed-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
