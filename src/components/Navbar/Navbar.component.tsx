'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./_Navbar.style.scss";

const Navbar: React.FC = () => {
  useEffect(() => {
    const initOffcanvas = async () => {
      const { default: Offcanvas } = await import("bootstrap/js/dist/offcanvas");
      const offcanvasElement = document.getElementById("offcanvasMenu");
      if (!offcanvasElement) return;
      const offcanvasInstance = new Offcanvas(offcanvasElement);
      offcanvasInstance.show();
    };
    initOffcanvas();
  }, []);

  const pathname = usePathname() || "/";

  return (
    <nav id='main-navbar'>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-body d-flex align-items-center">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/coming-soon" className={`nav-link d-flex flex-column align-items-center ${pathname === '/about' ? 'active' : ''}`}>
                <span className="icon-holder"><i className="bi bi-person-circle"></i></span>
                <span className="nav-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/coming-soon" className={`nav-link d-flex flex-column align-items-center ${pathname === '/projects' ? 'active' : ''}`}>
                <span className="icon-holder"><i className="bi bi-suitcase-lg-fill"></i></span>
                <span className="nav-text">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/coming-soon" className={`nav-link d-flex flex-column align-items-center ${pathname === '/blog' ? 'active' : ''}`}>
                <span className="icon-holder"><i className="bi bi-vector-pen"></i></span>
                <span className="nav-text">Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/resume" className={`nav-link d-flex flex-column align-items-center ${pathname === '/resume' ? 'active' : ''}`}>
                <span className="icon-holder"><i className="bi bi-file-earmark-code-fill"></i></span>
                <span className="nav-text">Resume</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/coming-soon" className={`nav-link d-flex flex-column align-items-center ${pathname === '/contact' ? 'active' : ''}`}>
                <span className="icon-holder"><i className="bi bi-chat-dots-fill"></i></span>
                <span className="nav-text">Contact</span>
              </Link>
            </li>
            <li className="nav-item nav-item-close d-none d-lg-flex">
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                type="button"
              >
                <i className="bi bi-x"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;