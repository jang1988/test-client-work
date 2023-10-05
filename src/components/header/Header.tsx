import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './header.scss';


const Header: React.FC = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [activeSessions, setActiveSessions] = useState(0);

    useEffect(() => {
        const socket = io('https://test-api-work.up.railway.app');

        socket.on('activeSessions', (count) => {
            setActiveSessions(count);
        });

        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            socket.disconnect();
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://s.tmimgcdn.com/scr/800x500/305000/logotip-zelenoj-idei-sablon-logotipa-idei-prirody_305023-original.jpg" alt="Лого" />
            </div>
            <div className="header__search">
                <input type="text" className="header__search-input" placeholder="Поиск..." />
            </div>
            <div className="header__date">{currentDateTime.toLocaleDateString()}</div>
            <div className="header__time">{currentDateTime.toLocaleTimeString()}</div>
            <div className="header__sessions">
                Active Users: {activeSessions}
            </div>
        </div>
    );
};

export default Header;
