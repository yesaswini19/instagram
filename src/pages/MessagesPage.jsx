import { conversations, messages } from '../data/mockData';

function MessagesPage() {
  return (
    <div className="page-shell messages-page">
      <header className="page-header">
        <h1>Messages</h1>
      </header>

      <div className="messenger-layout">
        <aside className="conversation-list">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="conversation-item">
              <img src={conversation.user.profilePicture} alt={conversation.user.username} />
              <div>
                <strong>{conversation.user.username}</strong>
                <p>{conversation.preview}</p>
              </div>
              <small>{conversation.time}</small>
            </div>
          ))}
        </aside>

        <section className="chat-panel">
          <header className="chat-header">
            <div className="user-meta">
              <img src={conversations[0].user.profilePicture} alt={conversations[0].user.username} />
              <div>
                <strong>{conversations[0].user.username}</strong>
                <small>Online</small>
              </div>
            </div>
          </header>

          <div className="chat-body">
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.from === 'me' ? 'mine' : ''}`}>
                <span>{message.text}</span>
                <small>{message.time}</small>
              </div>
            ))}
          </div>

          <div className="chat-input-row">
            <input type="text" placeholder="Write a message..." />
            <button type="button" className="primary-button">Send</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MessagesPage;
