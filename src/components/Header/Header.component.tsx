'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import './_header.style.scss';
import Link from 'next/link';

interface Props {
  defaultTheme: "light" | "dark";
};

const Header: React.FC<Props> = ({ defaultTheme }: Props) => {
  const { theme, toggleTheme } = useTheme(defaultTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMenuClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offcanvasElement = document.getElementById("offcanvasMenu");
    if (offcanvasElement) {
      const { default: Offcanvas } = await import("bootstrap/js/dist/offcanvas");
      const offcanvas = Offcanvas.getOrCreateInstance(offcanvasElement);
      offcanvas.toggle();
    }
  };

  return (
    <div className={`container-fluid position-fixed top-0 header-container pb-1 ${isScrolled ? 'scrolled' : ''}`} style={{ zIndex: 9999 }}>
      <header id='top-header' className='text-center position-relative'>
        <a className="menu-toggler" onClick={handleMenuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
          </svg>
        </a>
        <div className="mode-toggle text-center">
          <input
            id="theme-toggle"
            type="checkbox"
            className="toggle"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <label className="toggle-btn mx-auto mb-0" htmlFor="theme-toggle">
            <span className="day-icon toggle-icon"> <i className="bi bi-sun-fill"></i></span>
            <span className="night-icon toggle-icon"><i className="bi bi-moon-fill"></i></span>
          </label>
        </div>
        <ul className="social-list">
          <li className='me-0 me-md-1 me-lg-2'><Link href={'https://www.linkedin.com/in/antonio-olvera'} target='_blank'><i className="bi bi-linkedin"></i></Link></li>
          <li className='me-0 me-md-1 me-lg-2'><Link href={'https://github.com/AntonioDev97'} target='_blank'><i className="bi bi-github"></i></Link></li>
          <li className='me-0 me-md-1 me-lg-2'><Link href={'https://stackoverflow.com/users/12887595/antoniodev97'} target='_blank'><i className="bi bi-stack-overflow"></i></Link></li>
          <li className='me-0 me-md-1 me-lg-2'><Link href={'https://medium.com/@antonio.olvera.cruz'} target='_blank'><i className="bi bi-medium"></i></Link></li>
        </ul>
        <Link href="/contact" className="btn btn-contact">
          Contact Me
        </Link>
      </header>
    </div>
  );
};

export default Header;