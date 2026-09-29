import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiVideo,
  FiMessageSquare,
  FiBell,
  FiPlusSquare,
  FiUser,
  FiSettings,
} from 'react-icons/fi';

const navItems = [
  { label: 'Home', path: '/', icon: FiHome },
  { label: 'Search', path: '/explore', icon: FiSearch },
  { label: 'Explore', path: '/explore', icon: FiCompass },
  { label: 'Reels', path: '/reels', icon: FiVideo },
  { label: 'Messages', path: '/messages', icon: FiMessageSquare },
  { label: 'Notifications', path: '/notifications', icon: FiBell },
  { label: 'Create', path: '/create', icon: FiPlusSquare },
  { label: 'Profile', path: '/profile/mila.rose', icon: FiUser },
  { label: 'Settings', path: '/settings', icon: FiSettings },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">P</div>
        <div>
          <p className="eyebrow">Social</p>
          <h2>Pixora</h2>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-user-card">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
          alt="Current user"
        />
        <div>
          <strong>mila.rose</strong>
          <small>Online</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
