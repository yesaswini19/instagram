import { reels } from '../data/mockData';

function ReelsPage() {
  return (
    <div className="page-shell reels-page">
      <header className="page-header">
        <h1>Reels</h1>
      </header>

      <div className="reels-viewport">
        {reels.map((reel) => (
          <article key={reel.id} className="reel-card">
            <img src={reel.image} alt={reel.title} />
            <div className="reel-overlay">
              <div>
                <strong>{reel.user.username}</strong>
                <p>{reel.caption}</p>
              </div>
              <div className="reel-meta">
                <span>♥ {reel.likes.toLocaleString()}</span>
                <span>☰ {reel.title}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ReelsPage;
