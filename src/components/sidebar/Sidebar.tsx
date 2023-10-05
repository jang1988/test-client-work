import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './sidebar.scss';

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Приход', path: '/home' },
    { label: 'Группы', path: '/groups' },
    { label: 'Продукты', path: '/products' },
    { label: 'Пользователи', path: '/users' },
    { label: 'Настройки', path: '/settings' },
  ];

  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src="https://dec-clinic.by/upload/medialibrary/bf7/bf7a944ac929bf6669a2d67ea7c10266.jpg" alt="Фото профиля" />
        <div className="sidebar__settings">
          <FiSettings />
        </div>
      </div>
      <div className="sidebar__menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={item.path === location.pathname ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
