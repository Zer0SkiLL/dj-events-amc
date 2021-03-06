import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '@context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
// import { navHome, navCompanyLinks, navCompanyPage } from '../../utils/data';
import dynamic from 'next/dynamic';

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${navDark ? 'position-absolute' : ''} w-100 `}
    >
      <nav
        className={`navbar navbar-expand-xl ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={113}
                  height={36}
                  src="/_logo/Logo Playground (Ballon_Flyer).png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <Image
                  width={113}
                  height={36}
                  src="/logo-white.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
            </a>
          </Link>
          <a
            className="navbar-toggler position-absolute right-0 border-0"
            href="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </a>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/events">
                  <a className="nav-link">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/artists">
                  <a className="nav-link">Artists</a>
                </Link>
              </li>
            </ul>
          </div>

          {user ? (
          // logged in
          <>
          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <a onClick={() => logout()} className="btn btn-link text-decoration-none me-2">Logout</a>
            {/* <Link href="request-demo">
              <a className="btn btn-primary">Get Started</a>
            </Link> */}
          </div>
          </>
      ) : (
          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link href="login">
              <a className="btn btn-link text-decoration-none me-2">Sign In</a>
            </Link>
            {/* <Link href="request-demo">
              <a className="btn btn-primary">Get Started</a>
            </Link> */}
          </div>
      )}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={121}
                    height={36}
                    src="/logo-color.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {ssr : false});
