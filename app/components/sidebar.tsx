'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './sidebar.module.css';

const menuItems = [
  { name: 'OVERVIEW', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SKILLS', href: '/skills' },
  { name: 'TRAVELS', href: '/travel' },
  { name: 'CONTACT ME', href: '/contact' }
];

export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <h1 className={styles.mobileTitle}>JEFF&apos;S WEBSITE</h1>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.mobileMenuItem}>
              <Link href={item.href} className={styles.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Sidebar */}
      <div className={styles.container}>
        <h1 className={styles.title}>JEFF&apos;S WEBSITE</h1>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <div className={styles.bulletContainer}>
                <span className={styles.bullet}>•</span>
                {index < menuItems.length - 1 && <div className={styles.line} />}
              </div>
              <Link href={item.href} className={styles.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}