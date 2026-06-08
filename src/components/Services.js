import React from 'react';
import { EVENTS } from '../App';

function Services({ setPage }) {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Classes</h1>
          <p>
            Guided workshops and sessions for all ages and experience levels.<br />
            <strong>Register Now!</strong>
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)', padding: '70px 0' }}>
        <div className="container">
          <div className="row g-4">
            {EVENTS.map(ev => (
              <div className="col-md-6 col-lg-4" key={ev.id}>
                <div className="event-card" onClick={() => setPage({ name: 'event-detail', event: ev })}>
                  <div className="event-img-area">
                    <img src={ev.image} alt={ev.title} />
                  </div>
                  <div className="event-body">
                    <div className="event-date-tag"><i className="bi bi-calendar3 me-1"></i>{ev.date}</div>
                    <h5>{ev.title}</h5>
                    <p>{ev.desc.slice(0, 90)}...</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                      <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.15rem', color: 'var(--navy)' }}>
                        ${ev.price}
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.78rem', fontWeight: 400, color: '#888' }}>/session</span>
                      </span>
                      <button className="btn-event">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
