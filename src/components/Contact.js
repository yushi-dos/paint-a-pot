import React, { useState } from 'react';
import Confirmation from './Confirmation';

const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

function Contact({ setPage }) {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  function validate() {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your full name.';
    if (!email.trim() || !email.includes('@')) e.email = 'Please enter a valid email.';
    if (!phone.trim()) e.phone = 'Please enter your phone number.';
    if (!date) e.date = 'Please select a date.';
    if (!selectedTime) e.time = 'Please select a time slot.';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (submitted) {
    return (
      <Confirmation
        name={name}
        email={email}
        phone={phone}
        guests={guests}
        date={date}
        selectedTime={selectedTime}
        setPage={setPage}
      />
    );
  }

  return (
    <div className="res-page">
      <div className="page-hero">
        <div className="container">
          <h1>Reserve Your Table</h1>
          <p>No experience needed, we'll set you up with everything.</p>
        </div>
      </div>

      <div className="res-form-wrap fade-in">

        {/* Group Size */}
        <div>
          <label className="form-label">Group Size</label>
          <div className="guests-row">
            <button className="qty-btn" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
            <span className="qty-val">{guests}</span>
            <button className="qty-btn" onClick={() => setGuests(Math.min(20, guests + 1))}>+</button>
            <span>{guests} guest{guests > 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="form-label">Full Name *</label>
          <input className="form-control" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} />
          {errors.name && <div className="field-err"><i className="bi bi-exclamation-circle me-1"></i>{errors.name}</div>}
        </div>

        {/* Email */}
        <div>
          <label className="form-label">Email Address *</label>
          <input className="form-control" type="email" placeholder="jane@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <div className="field-err"><i className="bi bi-exclamation-circle me-1"></i>{errors.email}</div>}
        </div>

        {/* Phone Number*/}
        <div>
          <label className="form-label">Phone Number *</label>
          <input className="form-control" type="tel" placeholder="(514) 555-0000" value={phone} onChange={e => setPhone(e.target.value)} />
          {errors.phone && <div className="field-err"><i className="bi bi-exclamation-circle me-1"></i>{errors.phone}</div>}
        </div>

        {/* Date */}
        <div>
          <label className="form-label">Date *</label>
          <input className="form-control" type="date" min={minDateStr} value={date} onChange={e => setDate(e.target.value)} />
          {errors.date && <div className="field-err"><i className="bi bi-exclamation-circle me-1"></i>{errors.date}</div>}
        </div>

        {/* Time */}
        <div>
          <label className="form-label">Time *</label>
          <div className="time-slots">
            {TIME_SLOTS.map(t => (
              <button
                key={t}
                className={`time-slot ${selectedTime === t ? 'selected' : ''}`}
                onClick={() => setSelectedTime(t)}
              >{t}</button>
            ))}
          </div>
          {errors.time && <div className="field-err"><i className="bi bi-exclamation-circle me-1"></i>{errors.time}</div>}
        </div>

        {/* Payment notice */}
        <div className="pay-notice">
          <strong>No payment needed to reserve.</strong>You can pay the day you paint them.
        </div>

        <button className="btn-submit" onClick={handleSubmit}>
          Confirm Reservation &nbsp;<i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Contact;
