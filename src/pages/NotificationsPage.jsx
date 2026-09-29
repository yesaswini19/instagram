import { notifications } from '../data/mockData';

function NotificationsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Notifications</h1>
      </header>

      <div className="notification-list">
        {notifications.map((item) => (
          <div key={item.id} className={`notification-item ${item.read ? 'read' : ''}`}>
            <img src={item.user.profilePicture} alt={item.user.username} />
            <div>
              <p>{item.text}</p>
              <small>{item.read ? 'Seen' : 'New'}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsPage;
