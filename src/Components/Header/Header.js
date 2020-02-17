import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

const Header = () => {
  return(
    <header className="header-bg">
      <div className="header-container">
        <nav className="header-nav">
          <NavLink exact to={'/'} activeClassName="selected" className="header-nav-home">
            <h2>
              Home page
            </h2>
          </NavLink>
          <ul className="header-nav-menu">
            <li>
              <NavLink to={'/students'} activeClassName="selected" className="header-nav-menu-item">
                Students
              </NavLink>
            </li>  
            <li>
              <NavLink to={'/courses'} activeClassName="selected" className="header-nav-menu-item">
                Courses
              </NavLink>
            </li>         
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header;