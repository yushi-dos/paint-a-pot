import React from 'react';

function Confirmation({ name, email, phone, guests, date, selectedTime, setPage }) {
  const dateObj = new Date(date + 'T12:00:00');
  const fmtDate = dateObj.toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="confirm-page">
      <div className="container">
        <div className="confirm-wrap fade-in">
          <div className="confirm-top">
            <h2>You're All Booked!</h2>
            <p>
              Thank you, <strong>{name.split(' ')[0]}</strong>! We can't wait to paint with you.
              A confirmation has been sent to <strong>{email}</strong>.
            </p>
          </div>
          <div className="confirm-body">
            <h4>Reservation Summary</h4>
            <div className="summary-box">
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-person-fill"></i>Name</span>
                <span className="val">{name}</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-envelope-fill"></i>Email</span>
                <span className="val">{email}</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-telephone-fill"></i>Phone</span>
                <span className="val">{phone}</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-calendar3"></i>Date</span>
                <span className="val">{fmtDate}</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-clock-fill"></i>Time</span>
                <span className="val">{selectedTime}</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-people-fill"></i>Group Size</span>
                <span className="val">{guests} guest{guests > 1 ? 's' : ''}</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-geo-alt-fill"></i>Location</span>
                <span className="val">123 Studio Lane, Ottawa, ON</span>
              </div>
              <div className="summary-row">
                <span className="lbl"><i className="bi bi-tag-fill"></i>Pricing</span>
                <span className="val">From $8/piece, pay in studio</span>
              </div>
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

export default Confirmation;
