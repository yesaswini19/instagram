import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiCompass,
  FiVideo,
  FiMessageSquare,
  FiUser,
} from 'react-icons/fi';

const items = [
  { label: 'Home', path: '/', icon: FiHome },
  { label: 'Explore', path: '/explore', icon: FiCompass },
  { label: 'Reels', path: '/reels', icon: FiVideo },
  { label: 'Messages', path: '/messages', icon: FiMessageSquare },
  { label: 'Profile', path: '/profile/mila.rose', icon: FiUser },
];

function MobileNavbar() {
  return (
    <nav className="mobile-navbar" aria-label="Mobile navigation">
      {items.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
        >
          <Icon size={20} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default MobileNavbar;
