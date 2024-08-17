import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormPage.css';

function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert('Data submitted successfully');
      setName('');
      setEmail('');
    } else {
      alert('Failed to submit data');
    }
  };

  return (
    <div className="form-page">
      <h2>Submit Your Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default FormPage;
