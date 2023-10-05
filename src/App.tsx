import React from 'react';
import AppWrap from './wrapper/AppWrap';
import { Routes, Route } from 'react-router-dom';
import Orders from './components/mainPages/orders/Orders';
import Products from './components/mainPages/products/Products';
import Groups from './components/mainPages/groups/Groups';
import Users from './components/mainPages/users/Users';
import Settings from './components/mainPages/settings/Settings';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
                <Routes>
                    <Route path="/*" element={<Orders />} />
                    <Route path="/home" element={<Orders />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
        </div>
    );
};

export default AppWrap(App);
