import { exploreGrid } from '../data/mockData';

function ExplorePage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Explore</h1>
      </header>

      <div className="search-box">
        <input type="text" placeholder="Search creators, posts, and hashtags" />
      </div>

      <div className="trending-row">
        <span>#travel</span>
        <span>#design</span>
        <span>#foodie</span>
        <span>#vibes</span>
      </div>

      <div className="explore-grid">
        {exploreGrid.map((image, index) => (
          <div key={`${image}-${index}`} className={`explore-tile tall-${index % 2 === 0 ? 'a' : 'b'}`}>
            <img src={image} alt={`Explore ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
