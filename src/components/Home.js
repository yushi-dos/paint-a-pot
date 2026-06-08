import React from 'react';
import { EVENTS } from '../App';

function Home({ setPage }) {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="fade-in d1">Slow Down.<br /><em>Paint Something</em><br />Beautiful.</h1>
              <p className="fade-in d2">
                Pick a piece, grab a brush, and let your creativity flow.
                <br />Just you, paint, and a couple of relaxed hours in our welcoming studio.
              </p>
              <div className="d-flex flex-wrap gap-3 fade-in d3">
                <button className="btn-primary-round" onClick={() => setPage('reservations')}>Book a Table</button>
                <button className="btn-outline-round" onClick={() => setPage('classes')}>View Classes</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-how" id="howitworks">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">How It Works</h2>
            <p className="text-muted mt-3" style={{ maxWidth: 520, margin: '0 auto', fontSize: '.93rem', lineHeight: 1.7 }}>
              Let's show how easy it is to pottery paint.
            </p>
          </div>
          <div className="how-layout">
            <div className="how-steps">
              {[
                { n: '01', title: 'Book Your Table', desc: 'Reserve your spot online and choose a time that works for you.' },
                { n: '02', title: 'Choose Your Pottery', desc: 'Browse mugs, bowls, vases, and more ready to paint pieces.' },
                { n: '03', title: 'Paint & Create', desc: 'Relaxed session with all materials included.' },
                { n: '04', title: 'We Fire It', desc: 'We glaze and kiln-fire your piece professionally.' },
                { n: '05', title: 'Collect Your Creation', desc: 'Ready in 3-6 days for pickup.' },
              ].map((s, i) => (
                <div className="how-step" key={i}>
                  <div className="step-num">{s.n}</div>
                  <div>
                    <h5>{s.title}</h5>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="how-image">
              <img src="StonewareMug.jpg" alt="Pottery Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Classes */}
      <section className="section-events-strip">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{ color: 'var(--navy)' }}>Workshops & Classes</h2>
            <p className="text-muted mt-3" style={{ maxWidth: 480, margin: '0 auto', fontSize: '.92rem', lineHeight: 1.7 }}>
              Guided workshops and skill-building classes for all ages.
            </p>
          </div>
          <div className="row g-4">
            {EVENTS.slice(0, 6).map(ev => (
              <div className="col-md-6 col-lg-4" key={ev.id}>
                <div className="event-card" onClick={() => setPage({ name: 'event-detail', event: ev })}>
                  <div className="event-img-area">
                    <img src={ev.image} alt={ev.title} />
                  </div>
                  <div className="event-body">
                    <div className="event-date-tag"><i className="bi bi-calendar3 me-1"></i>{ev.date}</div>
                    <h5>{ev.title}</h5>
                    <p>{ev.desc.slice(0, 90)}...</p>
                    <button className="btn-event">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Inspired */}
      <section className="section-gallery" id="gallery">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Community Has Created</h2>
            <p className="text-muted mt-3" style={{ maxWidth: 480, margin: '0 auto', fontSize: '.92rem', lineHeight: 1.7 }}>
              Every piece is a reflection of the person who painted it.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gal-item"><img src="vase3.jpg" alt="Hand-painted vase" /><div className="gal-label">Hand-painted Vase</div></div>
            <div className="gal-item"><img src="animalplate.jpg" alt="Animal Plate" /><div className="gal-label">Animal Plate</div></div>
            <div className="gal-item"><img src="mug.jpg" alt="Glazed mug" /><div className="gal-label">Glazed Mug</div></div>
            <div className="gal-item"><img src="cutiesaucer.jpg" alt="Cutie Saucer" /><div className="gal-label">Cutie Saucer</div></div>
            <div className="gal-item"><img src="catnapplate.jpg" alt="Floral plate" /><div className="gal-label">Floral Plate</div></div>
            <div className="gal-item"><img src="catcup.jpg" alt="Cat Cup" /><div className="gal-label">Cup</div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
