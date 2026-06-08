import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';


export const EVENTS = [
  {
    id: 1,
    image: 'stonewareclass.jpg',
    color: 'linear-gradient(135deg,var(--mist),var(--sky))',
    title: 'Stoneware Mug Glazing Class',
    date: 'Mon, Jun 8, 2026',
    time: '6:00 PM – 8:00 PM',
    location: 'Paint-a-Pot Studio, 123 Studio Lane, Ottawa, ON',
    price: 19,
    desc: "Learn expert glazing techniques to make your very own stoneware mug truly one of a kind. All materials and the bisque mug are included. You'll leave with the skills to layer glazes beautifully and a piece ready to be fired.",
    includes: ['Stoneware mug', 'All glazes & brushes', '1 guided 90-min session', 'Kiln firing & pickup in 3-6 days'],
  },
  {
    id: 2,
    image: 'teenworkshop.jpg',
    color: 'linear-gradient(135deg,#457b9d,var(--navy))',
    title: 'Teen Beginner Hand-Building Course',
    date: 'Tuesdays (4 weeks)',
    time: '4:00 PM – 5:30 PM',
    location: 'Paint-a-Pot Studio, 123 Studio Lane, Ottawa, ON',
    price: 20,
    desc: "Get creative and learn the skill of working with clay in a guided, small-group series designed for teens aged 12–17. Over four Tuesday sessions you'll build confidence and create multiple take-home pieces.",
    includes: ['All clay, tools & materials', '4 guided 90-min sessions', 'Take-home finished pieces', 'All kiln firings included'],
  },
  {
    id: 3,
    image: 'adultworkshop.jpg',
    color: 'linear-gradient(135deg,var(--navy),#2c5f8a)',
    title: 'Adult Beginner Pottery Painting Course',
    date: 'Saturdays (4 weeks)',
    time: '10:00 AM - 11:30 AM',
    location: 'Paint-a-Pot Studio, 123 Studio Lane, Ottawa, ON',
    price: 23,
    desc: 'Experience the joy of working with clay in a guided, small-group series designed for adult beginners. Build real skills and beautiful pottery over four sessions.',
    includes: ['All clay, tools & materials', '4 guided sessions', 'Take-home finished pieces', 'All kiln firings included'],
  },
];

/* FOOTER */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="footer-brand">Paint-a-<span>Pot</span></div>
            <p className="mt-2">A welcoming pottery painting studio where creativity meets community. Every piece you make carries a piece of you.</p>
            <div className="social-icons mt-3">
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-tiktok"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <h6>Explore</h6>
            <ul className="footer-links">
              <li><button onClick={() => setPage('home')}>Home</button></li>
              <li><button onClick={() => setPage('classes')}>Classes</button></li>
              <li><button onClick={() => setPage('reservations')}>Book a Table</button></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2">
            <h6>Policies</h6>
            <ul className="footer-links">
              <li><a href="#">Pickup Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6>Hours & Location</h6>
            <div className="footer-hours">
              <strong>Mon – Thu</strong> 10:00 am – 8:00 pm<br />
              <strong>Fri – Sat</strong>&nbsp;&nbsp; 10:00 am – 9:00 pm<br />
              <strong>Sunday</strong>&nbsp;&nbsp;&nbsp; 10:00 am – 5:00 pm
            </div>
            <div className="mt-3" style={{ color: 'rgba(203,220,235,.65)', fontSize: '.87rem', lineHeight: 1.9 }}>
              <i className="bi bi-geo-alt-fill me-1" style={{ color: 'var(--sky)' }}></i>123 Studio Lane, Ottawa, ON<br />
              <i className="bi bi-telephone-fill me-1" style={{ color: 'var(--sky)' }}></i>(514) 555-7680<br />
              <i className="bi bi-envelope-fill me-1" style={{ color: 'var(--sky)' }}></i>paintapot@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* APP ROUTER */
function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  function navigate(p) { setPage(p); }

  const pageName = typeof page === 'string' ? page : page.name;
  const pageEvent = typeof page === 'object' ? page.event : null;

  return (
    <>
      <Navbar page={pageName} setPage={navigate} />

      {pageName === 'home'         && <Home        setPage={navigate} />}
      {pageName === 'classes'      && <Services     setPage={navigate} />}
      {pageName === 'reservations' && <Contact      setPage={navigate} />}
      {pageName === 'event-detail' && pageEvent     && <Booking event={pageEvent} setPage={navigate} />}

      <Footer setPage={navigate} />
    </>
  );
}

export default App;
