import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

let navInfo = [
  {
    title: 'music',
    url: '/music',
    cName: 'nav-link'
  },
  {
    title: 'about',
    url: '/about',
    cName: 'nav-link'
  },
  {
    title: 'contact',
    url: '/contact',
    cName: 'nav-link'
  }
];

const navItems = navInfo.map((item, index) => {
  return (
    <li key={index}>
      <NavLink className={item.cName} to={item.url}>{item.title}</NavLink>
    </li>
  )
})

export default function Nav() {
  return (
    <nav className='navigation'>
      <ul className='nav-menu'>
        {navItems}
      </ul>
    </nav>
  );
};