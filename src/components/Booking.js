import React, { useState } from 'react';

function Booking({ event, setPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qty, setQty] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your full name.';
    if (!email.trim() || !email.includes('@')) e.email = 'Please enter a valid email.';
    if (!phone.trim()) e.phone = 'Please enter your phone number.';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (submitted) {
    return <Confirmation name={name} email={email} phone={phone} qty={qty} event={event} setPage={setPage} />;
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{event.title}</h1>
          <p>{event.date}&nbsp;·&nbsp;{event.time}</p>
        </div>
      </div>

      <section className="section-event-detail">
        <div className="container">
          <div className="row g-4">

            {/* Class details */}
            <div className="col-lg-7">
              <div className="detail-card fade-in">
                <div className="detail-hero-img">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="detail-body">
                  <h2>{event.title}</h2>
                  <p className="detail-desc">{event.desc}</p>

                  <h6>
                    What's Included
                  </h6>
                  <ul className="included-list">
                    {event.includes.map((item, i) => (
                      <li key={i} >
                        <i className="bi bi-check2 me-2"></i>{item}
                      </li>
                    ))}
                  </ul>

                  <div className="price-row">
                    <div>
                      <div className="price-tag">
                        ${event.price}
                        <span>/session</span>
                      </div>
                      <div className="price-note">
                        Pay in person after the class
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration form */}
            <div className="col-lg-5" id="register-form">
              <div className="reg-form-card fade-in">
                <h3>Register Here</h3>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-control"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    {errors.name && <div><i className="bi bi-exclamation-circle me-1"></i>{errors.name}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="jane@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <div><i className="bi bi-exclamation-circle me-1"></i>{errors.email}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Phone Number *</label>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="(613) 555-0000"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                    {errors.phone && <div><i className="bi bi-exclamation-circle me-1"></i>{errors.phone}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Number of Tickets</label>
                    <div className="guests-row">
                      <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                      <span className="qty-val">{qty}</span>
                      <button className="qty-btn" onClick={() => setQty(Math.min(10, qty + 1))}>+</button>
                      <span className="ticket-total">${event.price * qty} total</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="booking-info-box">
                      <strong>${event.price * qty} total</strong> pay in person after class.
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn-submit" onClick={handleSubmit}>
                      Complete Registration <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;


function Confirmation({ name, email, phone, qty, event, setPage }) {
  return (
    <div className="confirm-page">
      <div className="container">
        <div className="confirm-wrap fade-in">
          <div className="confirm-top">
            <h2>You're Registered!</h2>
            <p>Thank you, <strong>{name.split(' ')[0]}</strong>! We'll see you in the studio.</p>
          </div>
          <div className="confirm-body">
            <h4>Registration Summary</h4>
            <div className="summary-box">
              <div className="summary-row"><span className="lbl"><i className="bi bi-person-fill"></i>Name</span><span className="val">{name}</span></div>
              <div className="summary-row"><span className="lbl"><i className="bi bi-envelope-fill"></i>Email</span><span className="val">{email}</span></div>
              <div className="summary-row"><span className="lbl"><i className="bi bi-telephone-fill"></i>Phone</span><span className="val">{phone}</span></div>
              <div className="summary-row"><span className="lbl"><i className="bi bi-calendar3"></i>Class</span><span className="val">{event.title}</span></div>
              <div className="summary-row"><span className="lbl"><i className="bi bi-people-fill"></i>Tickets</span><span className="val">{qty}</span></div>
              <div className="summary-row"><span className="lbl"><i className="bi bi-tag-fill"></i>Total</span><span className="val">${event.price * qty} — pay in person</span></div>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn-back-home" onClick={() => setPage('home')}>Back to Home</button>
              <button className="btn-back-outline" onClick={() => setPage('classes')}>Browse Classes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
