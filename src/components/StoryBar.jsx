import { stories } from '../data/mockData';

function StoryBar() {
  return (
    <section className="story-bar">
      <div className="story-add">
        <button type="button" className="icon-button">+</button>
        <span>Your story</span>
      </div>

      {stories.map((story) => (
        <div key={story.id} className="story-item">
          <div className={`story-ring ${story.viewed ? 'viewed' : ''}`}>
            <img src={story.user.profilePicture} alt={story.user.username} />
          </div>
          <span>{story.user.username.split('.')[0]}</span>
        </div>
      ))}
    </section>
  );
}

export default StoryBar;
