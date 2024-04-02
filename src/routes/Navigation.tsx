import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { Suspense } from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading... </span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" />
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  to="/shopping">
                  Shopping
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  to="/users">
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="about" element={<h1>About page</h1>} />
            <Route path="users" element={<h1>Users page</h1>} />
            <Route path="shopping" element={<ShoppingPage />} />
            <Route path="/*" element={<Navigate to="about" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
