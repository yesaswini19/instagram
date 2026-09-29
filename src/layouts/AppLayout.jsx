import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MobileNavbar from '../components/MobileNavbar';

function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-panel">
        <Outlet />
      </main>

      <aside className="right-panel">
        <div className="profile-card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
            alt="Current user"
          />
          <div>
            <strong>mila.rose</strong>
            <small>Mila Rose</small>
          </div>
          <button type="button" className="text-button">Switch</button>
        </div>

        <div className="suggestion-box">
          <div className="suggestion-header">
            <h3>Suggested for you</h3>
            <button type="button" className="text-button">See all</button>
          </div>
          <ul className="suggested-list">
            {['jason.miles', 'ava.nova', 'leo.carter'].map((user) => (
              <li key={user}>
                <div className="user-row">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                    alt={user}
                  />
                  <div>
                    <strong>{user}</strong>
                    <small>Suggested</small>
                  </div>
                </div>
                <button type="button" className="follow-button">Follow</button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <MobileNavbar />
    </div>
  );
}

export default AppLayout;
