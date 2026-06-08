import React, { useState } from 'react';

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <span className="navbar-brand" onClick={() => { setPage('home'); setOpen(false); }}>
          Paint-a-<span>Pot</span>
        </span>
        <button className="navbar-toggler" onClick={() => setOpen(!open)}>
          <i className={`bi ${open ? 'bi-x' : 'bi-list'} fs-3`} style={{ color: 'var(--navy)' }}></i>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                className={`nav-link ${page === 'home' ? 'active' : ''}`}
                onClick={() => { setPage('home'); setOpen(false); }}
              >Home</span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${page === 'classes' || page === 'event-detail' ? 'active' : ''}`}
                onClick={() => { setPage('classes'); setOpen(false); }}
              >Classes</span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => {
                  setPage('home');
                  setOpen(false);
                  setTimeout(() => {
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >Get Inspired</span>
            </li>
            <li className="nav-item ms-lg-2">
              <span
                className="nav-link btn-book-nav"
                onClick={() => { setPage('reservations'); setOpen(false); }}
              >Book a Table</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
