import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { Suspense } from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import { OtherShoppingPage } from '../02-component-patterns/pages/OtherShoppingPage';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading... </span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" />
            <ul>
              <li>
                <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  to="/compound-component-pattern">
                  Compound Pattern
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  to="/other-pattern-FC-SI">
                  RC + State Init
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to="/users">
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="home" element={<h1>Home page</h1>} />
            <Route path="about" element={<h1>About page</h1>} />
            <Route path="users" element={<h1>Users page</h1>} />
            <Route path="compound-component-pattern" element={<ShoppingPage />} />
            <Route path="other-pattern-FC-SI" element={<OtherShoppingPage />} />
            <Route path="/*" element={<Navigate to="home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
