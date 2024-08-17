import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DataPage.css';

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="data-page">
      <h2>Submitted Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`${item.name} - ${item.email}`}</li>
        ))}
      </ul>
      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default DataPage;
